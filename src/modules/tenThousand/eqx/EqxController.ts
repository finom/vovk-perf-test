import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqxes")
export default class EqxController {
  @operation({
    summary: "Get Eqxes",
  })
  @get()
  static getEqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqx",
  })
  @post("{id}")
  static createEqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
