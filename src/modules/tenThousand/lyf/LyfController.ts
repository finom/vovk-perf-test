import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyfs")
export default class LyfController {
  @operation({
    summary: "Get Lyfs",
  })
  @get()
  static getLyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyf",
  })
  @post("{id}")
  static createLyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
