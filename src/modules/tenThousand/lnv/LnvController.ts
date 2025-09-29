import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnvs")
export default class LnvController {
  @operation({
    summary: "Get Lnvs",
  })
  @get()
  static getLnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnv",
  })
  @post("{id}")
  static createLnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
