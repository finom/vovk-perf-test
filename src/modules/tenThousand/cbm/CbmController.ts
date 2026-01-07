import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbm")
export default class CbmController {
  @operation({
    summary: "Get Cbm",
  })
  @get()
  static getCbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbm",
  })
  @post("{id}")
  static createCbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
