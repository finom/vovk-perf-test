import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bid")
export default class BidController {
  @operation({
    summary: "Get Bid",
  })
  @get()
  static getBid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bid",
  })
  @post("{id}")
  static createBid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
