import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrcs")
export default class LrcController {
  @operation({
    summary: "Get Lrcs",
  })
  @get()
  static getLrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrc",
  })
  @post("{id}")
  static createLrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
