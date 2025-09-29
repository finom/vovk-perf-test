import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkgs")
export default class LkgController {
  @operation({
    summary: "Get Lkgs",
  })
  @get()
  static getLkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkg",
  })
  @post("{id}")
  static createLkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
