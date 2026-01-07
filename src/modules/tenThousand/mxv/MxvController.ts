import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxv")
export default class MxvController {
  @operation({
    summary: "Get Mxv",
  })
  @get()
  static getMxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxv",
  })
  @post("{id}")
  static createMxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
