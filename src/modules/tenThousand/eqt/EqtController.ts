import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqts")
export default class EqtController {
  @operation({
    summary: "Get Eqts",
  })
  @get()
  static getEqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqt",
  })
  @post("{id}")
  static createEqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
