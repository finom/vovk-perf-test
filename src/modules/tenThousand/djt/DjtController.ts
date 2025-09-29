import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djts")
export default class DjtController {
  @operation({
    summary: "Get Djts",
  })
  @get()
  static getDjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djt",
  })
  @post("{id}")
  static createDjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
