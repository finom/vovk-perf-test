import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxl")
export default class MxlController {
  @operation({
    summary: "Get Mxl",
  })
  @get()
  static getMxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxl",
  })
  @post("{id}")
  static createMxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
