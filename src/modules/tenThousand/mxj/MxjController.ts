import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxj")
export default class MxjController {
  @operation({
    summary: "Get Mxj",
  })
  @get()
  static getMxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxj",
  })
  @post("{id}")
  static createMxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
