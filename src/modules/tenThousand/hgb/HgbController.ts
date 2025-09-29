import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgbs")
export default class HgbController {
  @operation({
    summary: "Get Hgbs",
  })
  @get()
  static getHgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgb",
  })
  @post("{id}")
  static createHgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
