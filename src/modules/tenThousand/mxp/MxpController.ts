import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxp")
export default class MxpController {
  @operation({
    summary: "Get Mxp",
  })
  @get()
  static getMxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxp",
  })
  @post("{id}")
  static createMxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
