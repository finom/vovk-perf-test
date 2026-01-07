import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgr")
export default class MgrController {
  @operation({
    summary: "Get Mgr",
  })
  @get()
  static getMgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgr",
  })
  @post("{id}")
  static createMgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
