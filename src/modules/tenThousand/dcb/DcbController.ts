import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcb")
export default class DcbController {
  @operation({
    summary: "Get Dcb",
  })
  @get()
  static getDcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcb",
  })
  @post("{id}")
  static createDcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
