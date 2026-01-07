import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfv")
export default class CfvController {
  @operation({
    summary: "Get Cfv",
  })
  @get()
  static getCfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfv",
  })
  @post("{id}")
  static createCfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
