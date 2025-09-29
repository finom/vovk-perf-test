import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("negs")
export default class NegController {
  @operation({
    summary: "Get Negs",
  })
  @get()
  static getNegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Neg",
  })
  @post("{id}")
  static createNeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
