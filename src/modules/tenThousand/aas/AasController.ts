import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aas")
export default class AasController {
  @operation({
    summary: "Get Aas",
  })
  @get()
  static getAas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aas",
  })
  @post("{id}")
  static createAas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
