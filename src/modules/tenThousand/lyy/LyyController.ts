import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyys")
export default class LyyController {
  @operation({
    summary: "Get Lyys",
  })
  @get()
  static getLyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyy",
  })
  @post("{id}")
  static createLyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
