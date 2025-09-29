import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqms")
export default class EqmController {
  @operation({
    summary: "Get Eqms",
  })
  @get()
  static getEqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqm",
  })
  @post("{id}")
  static createEqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
