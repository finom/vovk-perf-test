import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcm")
export default class DcmController {
  @operation({
    summary: "Get Dcm",
  })
  @get()
  static getDcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcm",
  })
  @post("{id}")
  static createDcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
