import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfu")
export default class KfuController {
  @operation({
    summary: "Get Kfu",
  })
  @get()
  static getKfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfu",
  })
  @post("{id}")
  static createKfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
