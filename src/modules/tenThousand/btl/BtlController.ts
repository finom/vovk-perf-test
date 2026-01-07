import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btl")
export default class BtlController {
  @operation({
    summary: "Get Btl",
  })
  @get()
  static getBtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btl",
  })
  @post("{id}")
  static createBtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
