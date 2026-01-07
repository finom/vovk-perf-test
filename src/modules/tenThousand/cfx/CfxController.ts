import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfx")
export default class CfxController {
  @operation({
    summary: "Get Cfx",
  })
  @get()
  static getCfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfx",
  })
  @post("{id}")
  static createCfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
