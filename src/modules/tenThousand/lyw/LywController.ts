import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyws")
export default class LywController {
  @operation({
    summary: "Get Lyws",
  })
  @get()
  static getLyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyw",
  })
  @post("{id}")
  static createLyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
