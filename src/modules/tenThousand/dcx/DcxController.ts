import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcx")
export default class DcxController {
  @operation({
    summary: "Get Dcx",
  })
  @get()
  static getDcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcx",
  })
  @post("{id}")
  static createDcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
