import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfm")
export default class CfmController {
  @operation({
    summary: "Get Cfm",
  })
  @get()
  static getCfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfm",
  })
  @post("{id}")
  static createCfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
