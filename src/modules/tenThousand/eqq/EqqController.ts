import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqqs")
export default class EqqController {
  @operation({
    summary: "Get Eqqs",
  })
  @get()
  static getEqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqq",
  })
  @post("{id}")
  static createEqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
