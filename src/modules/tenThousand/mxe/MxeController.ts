import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxe")
export default class MxeController {
  @operation({
    summary: "Get Mxe",
  })
  @get()
  static getMxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxe",
  })
  @post("{id}")
  static createMxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
