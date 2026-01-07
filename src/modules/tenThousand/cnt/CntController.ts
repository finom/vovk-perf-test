import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnt")
export default class CntController {
  @operation({
    summary: "Get Cnt",
  })
  @get()
  static getCnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnt",
  })
  @post("{id}")
  static createCnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
