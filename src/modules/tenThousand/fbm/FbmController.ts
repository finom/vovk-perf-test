import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbm")
export default class FbmController {
  @operation({
    summary: "Get Fbm",
  })
  @get()
  static getFbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbm",
  })
  @post("{id}")
  static createFbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
