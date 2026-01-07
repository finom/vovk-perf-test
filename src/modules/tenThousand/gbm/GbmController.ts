import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbm")
export default class GbmController {
  @operation({
    summary: "Get Gbm",
  })
  @get()
  static getGbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbm",
  })
  @post("{id}")
  static createGbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
