import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bids")
export default class BidController {
  @operation({
    summary: "Get Bids",
  })
  @get()
  static getBids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bid",
  })
  @post("{id}")
  static createBid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
