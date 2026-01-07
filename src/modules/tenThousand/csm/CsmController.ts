import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csm")
export default class CsmController {
  @operation({
    summary: "Get Csm",
  })
  @get()
  static getCsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csm",
  })
  @post("{id}")
  static createCsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
