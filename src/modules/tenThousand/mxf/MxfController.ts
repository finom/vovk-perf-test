import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxf")
export default class MxfController {
  @operation({
    summary: "Get Mxf",
  })
  @get()
  static getMxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxf",
  })
  @post("{id}")
  static createMxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
