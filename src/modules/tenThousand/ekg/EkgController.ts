import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekgs")
export default class EkgController {
  @operation({
    summary: "Get Ekgs",
  })
  @get()
  static getEkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekg",
  })
  @post("{id}")
  static createEkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
