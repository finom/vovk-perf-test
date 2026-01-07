import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zj")
export default class ZjController {
  @operation({
    summary: "Get Zj",
  })
  @get()
  static getZj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zj",
  })
  @post("{id}")
  static createZj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
