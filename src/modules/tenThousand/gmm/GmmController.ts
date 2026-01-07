import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmm")
export default class GmmController {
  @operation({
    summary: "Get Gmm",
  })
  @get()
  static getGmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmm",
  })
  @post("{id}")
  static createGmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
