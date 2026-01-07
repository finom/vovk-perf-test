import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dp")
export default class DpController {
  @operation({
    summary: "Get Dp",
  })
  @get()
  static getDp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dp",
  })
  @post("{id}")
  static createDp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
