import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buy")
export default class BuyController {
  @operation({
    summary: "Get Buy",
  })
  @get()
  static getBuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buy",
  })
  @post("{id}")
  static createBuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
