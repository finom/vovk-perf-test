import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggr")
export default class GgrController {
  @operation({
    summary: "Get Ggr",
  })
  @get()
  static getGgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggr",
  })
  @post("{id}")
  static createGgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
