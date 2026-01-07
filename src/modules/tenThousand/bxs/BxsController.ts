import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxs")
export default class BxsController {
  @operation({
    summary: "Get Bxs",
  })
  @get()
  static getBxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxs",
  })
  @post("{id}")
  static createBxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
