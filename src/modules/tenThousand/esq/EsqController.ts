import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esqs")
export default class EsqController {
  @operation({
    summary: "Get Esqs",
  })
  @get()
  static getEsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esq",
  })
  @post("{id}")
  static createEsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
