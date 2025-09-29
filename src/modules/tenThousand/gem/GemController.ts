import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gems")
export default class GemController {
  @operation({
    summary: "Get Gems",
  })
  @get()
  static getGems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gem",
  })
  @post("{id}")
  static createGem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
