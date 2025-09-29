import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckgs")
export default class CkgController {
  @operation({
    summary: "Get Ckgs",
  })
  @get()
  static getCkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckg",
  })
  @post("{id}")
  static createCkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
