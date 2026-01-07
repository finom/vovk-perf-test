import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcf")
export default class DcfController {
  @operation({
    summary: "Get Dcf",
  })
  @get()
  static getDcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcf",
  })
  @post("{id}")
  static createDcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
