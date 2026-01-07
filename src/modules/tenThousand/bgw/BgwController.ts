import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgw")
export default class BgwController {
  @operation({
    summary: "Get Bgw",
  })
  @get()
  static getBgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgw",
  })
  @post("{id}")
  static createBgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
