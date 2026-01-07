import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcv")
export default class DcvController {
  @operation({
    summary: "Get Dcv",
  })
  @get()
  static getDcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcv",
  })
  @post("{id}")
  static createDcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
