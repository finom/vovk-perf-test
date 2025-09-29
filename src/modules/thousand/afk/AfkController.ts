import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afks")
export default class AfkController {
  @operation({
    summary: "Get Afks",
  })
  @get()
  static getAfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afk",
  })
  @post("{id}")
  static createAfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
