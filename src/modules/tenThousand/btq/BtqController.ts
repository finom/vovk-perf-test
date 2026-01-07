import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btq")
export default class BtqController {
  @operation({
    summary: "Get Btq",
  })
  @get()
  static getBtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btq",
  })
  @post("{id}")
  static createBtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
