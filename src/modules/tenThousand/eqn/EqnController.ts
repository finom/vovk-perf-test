import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqns")
export default class EqnController {
  @operation({
    summary: "Get Eqns",
  })
  @get()
  static getEqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqn",
  })
  @post("{id}")
  static createEqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
