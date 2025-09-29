import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buhs")
export default class BuhController {
  @operation({
    summary: "Get Buhs",
  })
  @get()
  static getBuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buh",
  })
  @post("{id}")
  static createBuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
