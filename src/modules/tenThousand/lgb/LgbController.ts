import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgbs")
export default class LgbController {
  @operation({
    summary: "Get Lgbs",
  })
  @get()
  static getLgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgb",
  })
  @post("{id}")
  static createLgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
