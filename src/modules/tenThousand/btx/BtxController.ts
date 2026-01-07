import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btx")
export default class BtxController {
  @operation({
    summary: "Get Btx",
  })
  @get()
  static getBtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btx",
  })
  @post("{id}")
  static createBtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
