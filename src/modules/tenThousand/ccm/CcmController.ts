import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccm")
export default class CcmController {
  @operation({
    summary: "Get Ccm",
  })
  @get()
  static getCcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccm",
  })
  @post("{id}")
  static createCcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
