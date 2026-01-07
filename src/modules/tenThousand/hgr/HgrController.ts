import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgr")
export default class HgrController {
  @operation({
    summary: "Get Hgr",
  })
  @get()
  static getHgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgr",
  })
  @post("{id}")
  static createHgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
