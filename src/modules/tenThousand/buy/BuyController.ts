import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
