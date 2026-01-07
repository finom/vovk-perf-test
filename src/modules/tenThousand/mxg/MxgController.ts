import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxg")
export default class MxgController {
  @operation({
    summary: "Get Mxg",
  })
  @get()
  static getMxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxg",
  })
  @post("{id}")
  static createMxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
