import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxq")
export default class MxqController {
  @operation({
    summary: "Get Mxq",
  })
  @get()
  static getMxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxq",
  })
  @post("{id}")
  static createMxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
