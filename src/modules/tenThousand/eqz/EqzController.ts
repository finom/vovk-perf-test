import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqzs")
export default class EqzController {
  @operation({
    summary: "Get Eqzs",
  })
  @get()
  static getEqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqz",
  })
  @post("{id}")
  static createEqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
