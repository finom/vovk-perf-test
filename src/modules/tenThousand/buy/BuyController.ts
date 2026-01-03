import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buys")
export default class BuyController {
  @operation({
    summary: "Get Buys",
  })
  @get()
  static getBuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buy",
  })
  @post("{id}")
  static createBuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
