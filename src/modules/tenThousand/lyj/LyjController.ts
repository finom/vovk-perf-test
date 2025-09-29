import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyjs")
export default class LyjController {
  @operation({
    summary: "Get Lyjs",
  })
  @get()
  static getLyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyj",
  })
  @post("{id}")
  static createLyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
