import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxs")
export default class MxsController {
  @operation({
    summary: "Get Mxs",
  })
  @get()
  static getMxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxs",
  })
  @post("{id}")
  static createMxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
