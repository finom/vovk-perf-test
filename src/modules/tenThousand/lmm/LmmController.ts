import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmm")
export default class LmmController {
  @operation({
    summary: "Get Lmm",
  })
  @get()
  static getLmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmm",
  })
  @post("{id}")
  static createLmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
