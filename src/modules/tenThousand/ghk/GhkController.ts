import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghks")
export default class GhkController {
  @operation({
    summary: "Get Ghks",
  })
  @get()
  static getGhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghk",
  })
  @post("{id}")
  static createGhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
