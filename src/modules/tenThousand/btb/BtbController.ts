import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btb")
export default class BtbController {
  @operation({
    summary: "Get Btb",
  })
  @get()
  static getBtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btb",
  })
  @post("{id}")
  static createBtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
