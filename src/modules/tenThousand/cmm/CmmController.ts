import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmm")
export default class CmmController {
  @operation({
    summary: "Get Cmm",
  })
  @get()
  static getCmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmm",
  })
  @post("{id}")
  static createCmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
