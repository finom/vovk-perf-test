import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtx")
export default class DtxController {
  @operation({
    summary: "Get Dtx",
  })
  @get()
  static getDtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtx",
  })
  @post("{id}")
  static createDtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
