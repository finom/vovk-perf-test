import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btc")
export default class BtcController {
  @operation({
    summary: "Get Btc",
  })
  @get()
  static getBtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btc",
  })
  @post("{id}")
  static createBtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
