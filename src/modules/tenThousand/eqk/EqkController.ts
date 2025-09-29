import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqks")
export default class EqkController {
  @operation({
    summary: "Get Eqks",
  })
  @get()
  static getEqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqk",
  })
  @post("{id}")
  static createEqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
