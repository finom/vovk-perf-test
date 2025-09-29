import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqas")
export default class EqaController {
  @operation({
    summary: "Get Eqas",
  })
  @get()
  static getEqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqa",
  })
  @post("{id}")
  static createEqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
