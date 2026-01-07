import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfn")
export default class CfnController {
  @operation({
    summary: "Get Cfn",
  })
  @get()
  static getCfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfn",
  })
  @post("{id}")
  static createCfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
