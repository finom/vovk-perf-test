import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksas")
export default class KsaController {
  @operation({
    summary: "Get Ksas",
  })
  @get()
  static getKsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksa",
  })
  @post("{id}")
  static createKsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
