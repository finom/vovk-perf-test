import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buds")
export default class BudController {
  @operation({
    summary: "Get Buds",
  })
  @get()
  static getBuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bud",
  })
  @post("{id}")
  static createBud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
