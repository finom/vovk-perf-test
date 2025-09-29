import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akgs")
export default class AkgController {
  @operation({
    summary: "Get Akgs",
  })
  @get()
  static getAkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akg",
  })
  @post("{id}")
  static createAkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
