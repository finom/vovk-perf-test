import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgbs")
export default class FgbController {
  @operation({
    summary: "Get Fgbs",
  })
  @get()
  static getFgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgb",
  })
  @post("{id}")
  static createFgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
