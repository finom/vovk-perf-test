import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkgs")
export default class HkgController {
  @operation({
    summary: "Get Hkgs",
  })
  @get()
  static getHkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkg",
  })
  @post("{id}")
  static createHkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
