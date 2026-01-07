import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfg")
export default class CfgController {
  @operation({
    summary: "Get Cfg",
  })
  @get()
  static getCfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfg",
  })
  @post("{id}")
  static createCfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
