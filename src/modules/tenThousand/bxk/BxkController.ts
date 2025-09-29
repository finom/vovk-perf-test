import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxks")
export default class BxkController {
  @operation({
    summary: "Get Bxks",
  })
  @get()
  static getBxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxk",
  })
  @post("{id}")
  static createBxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
