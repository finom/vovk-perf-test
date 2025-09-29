import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnbs")
export default class LnbController {
  @operation({
    summary: "Get Lnbs",
  })
  @get()
  static getLnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnb",
  })
  @post("{id}")
  static createLnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
