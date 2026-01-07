import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbg")
export default class LbgController {
  @operation({
    summary: "Get Lbg",
  })
  @get()
  static getLbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbg",
  })
  @post("{id}")
  static createLbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
