import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqgs")
export default class EqgController {
  @operation({
    summary: "Get Eqgs",
  })
  @get()
  static getEqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqg",
  })
  @post("{id}")
  static createEqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
