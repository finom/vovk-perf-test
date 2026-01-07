import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxw")
export default class MxwController {
  @operation({
    summary: "Get Mxw",
  })
  @get()
  static getMxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxw",
  })
  @post("{id}")
  static createMxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
