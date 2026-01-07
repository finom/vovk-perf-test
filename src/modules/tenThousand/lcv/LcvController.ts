import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcv")
export default class LcvController {
  @operation({
    summary: "Get Lcv",
  })
  @get()
  static getLcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcv",
  })
  @post("{id}")
  static createLcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
