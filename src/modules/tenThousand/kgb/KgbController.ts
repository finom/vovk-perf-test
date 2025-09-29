import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgbs")
export default class KgbController {
  @operation({
    summary: "Get Kgbs",
  })
  @get()
  static getKgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgb",
  })
  @post("{id}")
  static createKgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
