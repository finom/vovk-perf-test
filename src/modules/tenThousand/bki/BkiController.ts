import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkis")
export default class BkiController {
  @operation({
    summary: "Get Bkis",
  })
  @get()
  static getBkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bki",
  })
  @post("{id}")
  static createBki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
