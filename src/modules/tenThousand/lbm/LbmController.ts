import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbm")
export default class LbmController {
  @operation({
    summary: "Get Lbm",
  })
  @get()
  static getLbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbm",
  })
  @post("{id}")
  static createLbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
