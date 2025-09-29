import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djvs")
export default class DjvController {
  @operation({
    summary: "Get Djvs",
  })
  @get()
  static getDjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djv",
  })
  @post("{id}")
  static createDjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
