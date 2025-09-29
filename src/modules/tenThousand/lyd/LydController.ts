import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyds")
export default class LydController {
  @operation({
    summary: "Get Lyds",
  })
  @get()
  static getLyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyd",
  })
  @post("{id}")
  static createLyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
