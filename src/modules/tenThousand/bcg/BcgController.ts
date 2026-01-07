import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcg")
export default class BcgController {
  @operation({
    summary: "Get Bcg",
  })
  @get()
  static getBcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcg",
  })
  @post("{id}")
  static createBcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
