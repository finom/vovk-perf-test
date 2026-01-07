import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbg")
export default class BbgController {
  @operation({
    summary: "Get Bbg",
  })
  @get()
  static getBbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbg",
  })
  @post("{id}")
  static createBbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
