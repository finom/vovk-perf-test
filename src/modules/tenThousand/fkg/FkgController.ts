import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkgs")
export default class FkgController {
  @operation({
    summary: "Get Fkgs",
  })
  @get()
  static getFkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkg",
  })
  @post("{id}")
  static createFkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
