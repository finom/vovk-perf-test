import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyls")
export default class LylController {
  @operation({
    summary: "Get Lyls",
  })
  @get()
  static getLyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyl",
  })
  @post("{id}")
  static createLyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
