import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyqs")
export default class LyqController {
  @operation({
    summary: "Get Lyqs",
  })
  @get()
  static getLyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyq",
  })
  @post("{id}")
  static createLyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
