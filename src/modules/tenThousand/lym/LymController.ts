import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyms")
export default class LymController {
  @operation({
    summary: "Get Lyms",
  })
  @get()
  static getLyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lym",
  })
  @post("{id}")
  static createLym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
