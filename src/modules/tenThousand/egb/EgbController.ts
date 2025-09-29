import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egbs")
export default class EgbController {
  @operation({
    summary: "Get Egbs",
  })
  @get()
  static getEgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egb",
  })
  @post("{id}")
  static createEgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
