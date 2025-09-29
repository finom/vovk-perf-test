import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkis")
export default class NkiController {
  @operation({
    summary: "Get Nkis",
  })
  @get()
  static getNkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nki",
  })
  @post("{id}")
  static createNki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
