import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkgs")
export default class GkgController {
  @operation({
    summary: "Get Gkgs",
  })
  @get()
  static getGkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkg",
  })
  @post("{id}")
  static createGkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
