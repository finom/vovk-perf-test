import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyus")
export default class LyuController {
  @operation({
    summary: "Get Lyus",
  })
  @get()
  static getLyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyu",
  })
  @post("{id}")
  static createLyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
