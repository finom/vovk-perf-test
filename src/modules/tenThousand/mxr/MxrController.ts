import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxr")
export default class MxrController {
  @operation({
    summary: "Get Mxr",
  })
  @get()
  static getMxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxr",
  })
  @post("{id}")
  static createMxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
