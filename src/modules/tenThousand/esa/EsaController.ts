import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esas")
export default class EsaController {
  @operation({
    summary: "Get Esas",
  })
  @get()
  static getEsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esa",
  })
  @post("{id}")
  static createEsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
