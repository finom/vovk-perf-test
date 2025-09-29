import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqjs")
export default class EqjController {
  @operation({
    summary: "Get Eqjs",
  })
  @get()
  static getEqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqj",
  })
  @post("{id}")
  static createEqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
