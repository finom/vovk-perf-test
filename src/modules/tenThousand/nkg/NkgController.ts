import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkgs")
export default class NkgController {
  @operation({
    summary: "Get Nkgs",
  })
  @get()
  static getNkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkg",
  })
  @post("{id}")
  static createNkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
