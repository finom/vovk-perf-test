import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czs")
export default class CzsController {
  @operation({
    summary: "Get Czs",
  })
  @get()
  static getCzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czs",
  })
  @post("{id}")
  static createCzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
