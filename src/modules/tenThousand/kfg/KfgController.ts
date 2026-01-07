import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfg")
export default class KfgController {
  @operation({
    summary: "Get Kfg",
  })
  @get()
  static getKfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfg",
  })
  @post("{id}")
  static createKfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
