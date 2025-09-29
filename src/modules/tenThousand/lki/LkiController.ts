import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkis")
export default class LkiController {
  @operation({
    summary: "Get Lkis",
  })
  @get()
  static getLkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lki",
  })
  @post("{id}")
  static createLki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
