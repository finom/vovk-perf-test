import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xg")
export default class XgController {
  @operation({
    summary: "Get Xg",
  })
  @get()
  static getXg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xg",
  })
  @post("{id}")
  static createXg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
