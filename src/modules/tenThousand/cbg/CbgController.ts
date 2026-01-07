import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbg")
export default class CbgController {
  @operation({
    summary: "Get Cbg",
  })
  @get()
  static getCbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbg",
  })
  @post("{id}")
  static createCbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
