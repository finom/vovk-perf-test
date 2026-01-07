import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbj")
export default class FbjController {
  @operation({
    summary: "Get Fbj",
  })
  @get()
  static getFbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbj",
  })
  @post("{id}")
  static createFbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
