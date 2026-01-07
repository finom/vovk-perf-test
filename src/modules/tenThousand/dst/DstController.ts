import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dst")
export default class DstController {
  @operation({
    summary: "Get Dst",
  })
  @get()
  static getDst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dst",
  })
  @post("{id}")
  static createDst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
