import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqws")
export default class EqwController {
  @operation({
    summary: "Get Eqws",
  })
  @get()
  static getEqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqw",
  })
  @post("{id}")
  static createEqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
