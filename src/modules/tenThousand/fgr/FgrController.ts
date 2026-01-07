import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgr")
export default class FgrController {
  @operation({
    summary: "Get Fgr",
  })
  @get()
  static getFgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgr",
  })
  @post("{id}")
  static createFgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
