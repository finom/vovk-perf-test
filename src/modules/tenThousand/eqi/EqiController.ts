import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqis")
export default class EqiController {
  @operation({
    summary: "Get Eqis",
  })
  @get()
  static getEqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqi",
  })
  @post("{id}")
  static createEqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
