import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arbs")
export default class ArbController {
  @operation({
    summary: "Get Arbs",
  })
  @get()
  static getArbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arb",
  })
  @post("{id}")
  static createArb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
