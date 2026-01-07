import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btg")
export default class BtgController {
  @operation({
    summary: "Get Btg",
  })
  @get()
  static getBtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btg",
  })
  @post("{id}")
  static createBtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
