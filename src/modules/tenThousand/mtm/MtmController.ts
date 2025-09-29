import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtms")
export default class MtmController {
  @operation({
    summary: "Get Mtms",
  })
  @get()
  static getMtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtm",
  })
  @post("{id}")
  static createMtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
