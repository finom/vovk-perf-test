import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbp")
export default class FbpController {
  @operation({
    summary: "Get Fbp",
  })
  @get()
  static getFbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbp",
  })
  @post("{id}")
  static createFbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
