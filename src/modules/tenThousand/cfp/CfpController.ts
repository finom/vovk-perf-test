import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfp")
export default class CfpController {
  @operation({
    summary: "Get Cfp",
  })
  @get()
  static getCfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfp",
  })
  @post("{id}")
  static createCfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
