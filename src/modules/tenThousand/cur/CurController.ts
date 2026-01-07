import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cur")
export default class CurController {
  @operation({
    summary: "Get Cur",
  })
  @get()
  static getCur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cur",
  })
  @post("{id}")
  static createCur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
