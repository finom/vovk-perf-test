import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imv")
export default class ImvController {
  @operation({
    summary: "Get Imv",
  })
  @get()
  static getImv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imv",
  })
  @post("{id}")
  static createImv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
