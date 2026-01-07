import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cst")
export default class CstController {
  @operation({
    summary: "Get Cst",
  })
  @get()
  static getCst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cst",
  })
  @post("{id}")
  static createCst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
