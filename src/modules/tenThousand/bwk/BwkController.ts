import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwks")
export default class BwkController {
  @operation({
    summary: "Get Bwks",
  })
  @get()
  static getBwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwk",
  })
  @post("{id}")
  static createBwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
