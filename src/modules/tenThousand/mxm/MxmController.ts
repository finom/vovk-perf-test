import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxm")
export default class MxmController {
  @operation({
    summary: "Get Mxm",
  })
  @get()
  static getMxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxm",
  })
  @post("{id}")
  static createMxm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
