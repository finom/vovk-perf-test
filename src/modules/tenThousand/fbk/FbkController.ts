import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbk")
export default class FbkController {
  @operation({
    summary: "Get Fbk",
  })
  @get()
  static getFbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbk",
  })
  @post("{id}")
  static createFbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
