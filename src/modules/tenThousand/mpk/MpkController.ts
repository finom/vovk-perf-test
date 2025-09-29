import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpks")
export default class MpkController {
  @operation({
    summary: "Get Mpks",
  })
  @get()
  static getMpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpk",
  })
  @post("{id}")
  static createMpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
