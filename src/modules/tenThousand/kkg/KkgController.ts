import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkgs")
export default class KkgController {
  @operation({
    summary: "Get Kkgs",
  })
  @get()
  static getKkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkg",
  })
  @post("{id}")
  static createKkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
