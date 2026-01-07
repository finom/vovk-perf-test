import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dic")
export default class DicController {
  @operation({
    summary: "Get Dic",
  })
  @get()
  static getDic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dic",
  })
  @post("{id}")
  static createDic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
