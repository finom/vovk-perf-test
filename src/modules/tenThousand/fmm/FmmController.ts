import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmm")
export default class FmmController {
  @operation({
    summary: "Get Fmm",
  })
  @get()
  static getFmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmm",
  })
  @post("{id}")
  static createFmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
