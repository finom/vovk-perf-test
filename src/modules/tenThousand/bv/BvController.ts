import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bv")
export default class BvController {
  @operation({
    summary: "Get Bv",
  })
  @get()
  static getBv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bv",
  })
  @post("{id}")
  static createBv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
