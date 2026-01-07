import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbs")
export default class BbsController {
  @operation({
    summary: "Get Bbs",
  })
  @get()
  static getBbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbs",
  })
  @post("{id}")
  static createBbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
