import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lygs")
export default class LygController {
  @operation({
    summary: "Get Lygs",
  })
  @get()
  static getLygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyg",
  })
  @post("{id}")
  static createLyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
