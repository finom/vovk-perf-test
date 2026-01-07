import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbv")
export default class BbvController {
  @operation({
    summary: "Get Bbv",
  })
  @get()
  static getBbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbv",
  })
  @post("{id}")
  static createBbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
