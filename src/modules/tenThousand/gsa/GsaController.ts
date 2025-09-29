import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsas")
export default class GsaController {
  @operation({
    summary: "Get Gsas",
  })
  @get()
  static getGsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsa",
  })
  @post("{id}")
  static createGsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
