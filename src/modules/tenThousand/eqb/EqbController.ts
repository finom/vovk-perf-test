import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqbs")
export default class EqbController {
  @operation({
    summary: "Get Eqbs",
  })
  @get()
  static getEqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqb",
  })
  @post("{id}")
  static createEqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
