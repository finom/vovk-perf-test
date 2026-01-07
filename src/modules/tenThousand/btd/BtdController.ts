import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btd")
export default class BtdController {
  @operation({
    summary: "Get Btd",
  })
  @get()
  static getBtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btd",
  })
  @post("{id}")
  static createBtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
