import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfu")
export default class CfuController {
  @operation({
    summary: "Get Cfu",
  })
  @get()
  static getCfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfu",
  })
  @post("{id}")
  static createCfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
