import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djqs")
export default class DjqController {
  @operation({
    summary: "Get Djqs",
  })
  @get()
  static getDjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djq",
  })
  @post("{id}")
  static createDjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
