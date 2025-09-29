import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bows")
export default class BowController {
  @operation({
    summary: "Get Bows",
  })
  @get()
  static getBows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bow",
  })
  @post("{id}")
  static createBow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
