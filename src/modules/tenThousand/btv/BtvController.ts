import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btv")
export default class BtvController {
  @operation({
    summary: "Get Btv",
  })
  @get()
  static getBtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btv",
  })
  @post("{id}")
  static createBtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
