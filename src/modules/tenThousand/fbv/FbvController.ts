import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbv")
export default class FbvController {
  @operation({
    summary: "Get Fbv",
  })
  @get()
  static getFbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbv",
  })
  @post("{id}")
  static createFbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
