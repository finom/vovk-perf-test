import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btf")
export default class BtfController {
  @operation({
    summary: "Get Btf",
  })
  @get()
  static getBtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btf",
  })
  @post("{id}")
  static createBtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
