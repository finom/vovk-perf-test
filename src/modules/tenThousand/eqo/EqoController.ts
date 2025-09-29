import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqos")
export default class EqoController {
  @operation({
    summary: "Get Eqos",
  })
  @get()
  static getEqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqo",
  })
  @post("{id}")
  static createEqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
