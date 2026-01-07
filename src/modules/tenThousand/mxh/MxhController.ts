import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxh")
export default class MxhController {
  @operation({
    summary: "Get Mxh",
  })
  @get()
  static getMxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxh",
  })
  @post("{id}")
  static createMxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
