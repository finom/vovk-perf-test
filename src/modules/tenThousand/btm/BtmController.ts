import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btm")
export default class BtmController {
  @operation({
    summary: "Get Btm",
  })
  @get()
  static getBtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btm",
  })
  @post("{id}")
  static createBtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
