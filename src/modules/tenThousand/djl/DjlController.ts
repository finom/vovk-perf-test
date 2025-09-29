import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djls")
export default class DjlController {
  @operation({
    summary: "Get Djls",
  })
  @get()
  static getDjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djl",
  })
  @post("{id}")
  static createDjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
