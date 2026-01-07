import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbp")
export default class CbpController {
  @operation({
    summary: "Get Cbp",
  })
  @get()
  static getCbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbp",
  })
  @post("{id}")
  static createCbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
