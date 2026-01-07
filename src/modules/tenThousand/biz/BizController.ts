import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biz")
export default class BizController {
  @operation({
    summary: "Get Biz",
  })
  @get()
  static getBiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Biz",
  })
  @post("{id}")
  static createBiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
