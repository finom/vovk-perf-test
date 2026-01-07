import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxb")
export default class MxbController {
  @operation({
    summary: "Get Mxb",
  })
  @get()
  static getMxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxb",
  })
  @post("{id}")
  static createMxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
