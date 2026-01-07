import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbv")
export default class CbvController {
  @operation({
    summary: "Get Cbv",
  })
  @get()
  static getCbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbv",
  })
  @post("{id}")
  static createCbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
