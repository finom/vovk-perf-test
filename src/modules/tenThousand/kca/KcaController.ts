import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcas")
export default class KcaController {
  @operation({
    summary: "Get Kcas",
  })
  @get()
  static getKcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kca",
  })
  @post("{id}")
  static createKca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
