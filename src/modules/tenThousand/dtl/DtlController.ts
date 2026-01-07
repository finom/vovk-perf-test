import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtl")
export default class DtlController {
  @operation({
    summary: "Get Dtl",
  })
  @get()
  static getDtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtl",
  })
  @post("{id}")
  static createDtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
