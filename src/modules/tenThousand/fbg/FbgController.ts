import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbg")
export default class FbgController {
  @operation({
    summary: "Get Fbg",
  })
  @get()
  static getFbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbg",
  })
  @post("{id}")
  static createFbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
