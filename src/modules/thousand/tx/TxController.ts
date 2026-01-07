import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tx")
export default class TxController {
  @operation({
    summary: "Get Tx",
  })
  @get()
  static getTx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tx",
  })
  @post("{id}")
  static createTx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
