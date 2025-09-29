import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtbs")
export default class MtbController {
  @operation({
    summary: "Get Mtbs",
  })
  @get()
  static getMtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtb",
  })
  @post("{id}")
  static createMtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
