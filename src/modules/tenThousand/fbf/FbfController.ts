import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbf")
export default class FbfController {
  @operation({
    summary: "Get Fbf",
  })
  @get()
  static getFbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbf",
  })
  @post("{id}")
  static createFbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
