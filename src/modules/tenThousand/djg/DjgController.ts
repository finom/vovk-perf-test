import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djgs")
export default class DjgController {
  @operation({
    summary: "Get Djgs",
  })
  @get()
  static getDjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djg",
  })
  @post("{id}")
  static createDjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
