import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfu")
export default class LfuController {
  @operation({
    summary: "Get Lfu",
  })
  @get()
  static getLfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfu",
  })
  @post("{id}")
  static createLfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
