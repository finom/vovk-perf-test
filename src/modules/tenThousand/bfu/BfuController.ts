import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfu")
export default class BfuController {
  @operation({
    summary: "Get Bfu",
  })
  @get()
  static getBfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfu",
  })
  @post("{id}")
  static createBfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
