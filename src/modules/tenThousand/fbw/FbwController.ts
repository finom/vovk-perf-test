import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbw")
export default class FbwController {
  @operation({
    summary: "Get Fbw",
  })
  @get()
  static getFbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbw",
  })
  @post("{id}")
  static createFbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
