import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbv")
export default class LbvController {
  @operation({
    summary: "Get Lbv",
  })
  @get()
  static getLbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbv",
  })
  @post("{id}")
  static createLbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
