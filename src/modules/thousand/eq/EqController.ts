import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqs")
export default class EqController {
  @operation({
    summary: "Get Eqs",
  })
  @get()
  static getEqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eq",
  })
  @post("{id}")
  static createEq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
