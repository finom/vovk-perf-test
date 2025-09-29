import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buys")
export default class BuyController {
  @operation({
    summary: "Get Buys",
  })
  @get()
  static getBuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buy",
  })
  @post("{id}")
  static createBuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
