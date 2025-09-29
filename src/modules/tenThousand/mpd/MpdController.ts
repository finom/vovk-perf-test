import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpds")
export default class MpdController {
  @operation({
    summary: "Get Mpds",
  })
  @get()
  static getMpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpd",
  })
  @post("{id}")
  static createMpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
