import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lybs")
export default class LybController {
  @operation({
    summary: "Get Lybs",
  })
  @get()
  static getLybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyb",
  })
  @post("{id}")
  static createLyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
