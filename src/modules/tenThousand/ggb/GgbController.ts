import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggbs")
export default class GgbController {
  @operation({
    summary: "Get Ggbs",
  })
  @get()
  static getGgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggb",
  })
  @post("{id}")
  static createGgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
