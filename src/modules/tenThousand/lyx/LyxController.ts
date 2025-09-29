import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyxes")
export default class LyxController {
  @operation({
    summary: "Get Lyxes",
  })
  @get()
  static getLyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyx",
  })
  @post("{id}")
  static createLyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
