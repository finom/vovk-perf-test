import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyps")
export default class LypController {
  @operation({
    summary: "Get Lyps",
  })
  @get()
  static getLyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyp",
  })
  @post("{id}")
  static createLyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
