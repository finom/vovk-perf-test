import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcw")
export default class DcwController {
  @operation({
    summary: "Get Dcw",
  })
  @get()
  static getDcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcw",
  })
  @post("{id}")
  static createDcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
