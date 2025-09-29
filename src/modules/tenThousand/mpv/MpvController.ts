import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpvs")
export default class MpvController {
  @operation({
    summary: "Get Mpvs",
  })
  @get()
  static getMpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpv",
  })
  @post("{id}")
  static createMpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
