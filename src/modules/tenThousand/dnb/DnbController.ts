import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnbs")
export default class DnbController {
  @operation({
    summary: "Get Dnbs",
  })
  @get()
  static getDnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnb",
  })
  @post("{id}")
  static createDnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
