import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmp")
export default class CmpController {
  @operation({
    summary: "Get Cmp",
  })
  @get()
  static getCmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmp",
  })
  @post("{id}")
  static createCmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
