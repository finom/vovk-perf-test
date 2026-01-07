import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmr")
export default class CmrController {
  @operation({
    summary: "Get Cmr",
  })
  @get()
  static getCmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmr",
  })
  @post("{id}")
  static createCmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
