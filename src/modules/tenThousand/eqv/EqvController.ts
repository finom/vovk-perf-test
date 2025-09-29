import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqvs")
export default class EqvController {
  @operation({
    summary: "Get Eqvs",
  })
  @get()
  static getEqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqv",
  })
  @post("{id}")
  static createEqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
