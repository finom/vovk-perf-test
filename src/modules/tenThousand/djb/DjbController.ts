import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djbs")
export default class DjbController {
  @operation({
    summary: "Get Djbs",
  })
  @get()
  static getDjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djb",
  })
  @post("{id}")
  static createDjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
