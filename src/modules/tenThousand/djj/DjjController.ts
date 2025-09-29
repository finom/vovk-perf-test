import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djjs")
export default class DjjController {
  @operation({
    summary: "Get Djjs",
  })
  @get()
  static getDjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djj",
  })
  @post("{id}")
  static createDjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
