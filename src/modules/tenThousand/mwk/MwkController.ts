import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwks")
export default class MwkController {
  @operation({
    summary: "Get Mwks",
  })
  @get()
  static getMwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwk",
  })
  @post("{id}")
  static createMwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
