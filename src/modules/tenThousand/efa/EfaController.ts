import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efas")
export default class EfaController {
  @operation({
    summary: "Get Efas",
  })
  @get()
  static getEfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efa",
  })
  @post("{id}")
  static createEfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
