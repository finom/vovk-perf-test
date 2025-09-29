import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxus")
export default class BxuController {
  @operation({
    summary: "Get Bxus",
  })
  @get()
  static getBxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxu",
  })
  @post("{id}")
  static createBxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
