import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfg")
export default class HfgController {
  @operation({
    summary: "Get Hfg",
  })
  @get()
  static getHfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfg",
  })
  @post("{id}")
  static createHfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
