import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bid")
export default class BidController {
  @operation({
    summary: "Get Bid",
  })
  @get()
  static getBid = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bid",
  })
  @post("{id}")
  static createBid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
