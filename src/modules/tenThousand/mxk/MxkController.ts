import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxk")
export default class MxkController {
  @operation({
    summary: "Get Mxk",
  })
  @get()
  static getMxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxk",
  })
  @post("{id}")
  static createMxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
