import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buqs")
export default class BuqController {
  @operation({
    summary: "Get Buqs",
  })
  @get()
  static getBuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buq",
  })
  @post("{id}")
  static createBuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
