import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aas")
export default class AaController {
  @operation({
    summary: "Get Aas",
  })
  @get()
  static getAas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aa",
  })
  @post("{id}")
  static createAa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
