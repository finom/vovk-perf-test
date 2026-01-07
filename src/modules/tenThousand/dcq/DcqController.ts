import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcq")
export default class DcqController {
  @operation({
    summary: "Get Dcq",
  })
  @get()
  static getDcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcq",
  })
  @post("{id}")
  static createDcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
