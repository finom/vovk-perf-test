import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfb")
export default class CfbController {
  @operation({
    summary: "Get Cfb",
  })
  @get()
  static getCfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfb",
  })
  @post("{id}")
  static createCfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
