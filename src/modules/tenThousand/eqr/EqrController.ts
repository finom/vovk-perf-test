import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqrs")
export default class EqrController {
  @operation({
    summary: "Get Eqrs",
  })
  @get()
  static getEqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqr",
  })
  @post("{id}")
  static createEqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
