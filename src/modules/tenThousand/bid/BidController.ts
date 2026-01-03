import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bids")
export default class BidController {
  @operation({
    summary: "Get Bids",
  })
  @get()
  static getBids = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bid",
  })
  @post("{id}")
  static createBid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
