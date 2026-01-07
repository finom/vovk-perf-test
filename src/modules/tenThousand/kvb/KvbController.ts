import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvb")
export default class KvbController {
  @operation({
    summary: "Get Kvb",
  })
  @get()
  static getKvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvb",
  })
  @post("{id}")
  static createKvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
