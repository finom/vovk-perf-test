import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyts")
export default class LytController {
  @operation({
    summary: "Get Lyts",
  })
  @get()
  static getLyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyt",
  })
  @post("{id}")
  static createLyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
