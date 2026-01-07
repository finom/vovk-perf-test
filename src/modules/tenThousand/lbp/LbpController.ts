import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbp")
export default class LbpController {
  @operation({
    summary: "Get Lbp",
  })
  @get()
  static getLbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbp",
  })
  @post("{id}")
  static createLbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
