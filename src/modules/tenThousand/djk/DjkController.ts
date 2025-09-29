import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djks")
export default class DjkController {
  @operation({
    summary: "Get Djks",
  })
  @get()
  static getDjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djk",
  })
  @post("{id}")
  static createDjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
