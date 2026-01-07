import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmm")
export default class MmmController {
  @operation({
    summary: "Get Mmm",
  })
  @get()
  static getMmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmm",
  })
  @post("{id}")
  static createMmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
