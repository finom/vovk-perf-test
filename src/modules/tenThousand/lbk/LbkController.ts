import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbk")
export default class LbkController {
  @operation({
    summary: "Get Lbk",
  })
  @get()
  static getLbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbk",
  })
  @post("{id}")
  static createLbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
