import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmm")
export default class BmmController {
  @operation({
    summary: "Get Bmm",
  })
  @get()
  static getBmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmm",
  })
  @post("{id}")
  static createBmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
