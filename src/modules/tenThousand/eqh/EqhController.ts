import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqhs")
export default class EqhController {
  @operation({
    summary: "Get Eqhs",
  })
  @get()
  static getEqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqh",
  })
  @post("{id}")
  static createEqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
