import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxd")
export default class MxdController {
  @operation({
    summary: "Get Mxd",
  })
  @get()
  static getMxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxd",
  })
  @post("{id}")
  static createMxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
