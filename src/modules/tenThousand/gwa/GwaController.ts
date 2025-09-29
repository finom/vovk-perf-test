import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwas")
export default class GwaController {
  @operation({
    summary: "Get Gwas",
  })
  @get()
  static getGwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwa",
  })
  @post("{id}")
  static createGwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
