import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hot")
export default class HotController {
  @operation({
    summary: "Get Hot",
  })
  @get()
  static getHot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hot",
  })
  @post("{id}")
  static createHot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
