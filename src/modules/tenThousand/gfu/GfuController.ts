import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfu")
export default class GfuController {
  @operation({
    summary: "Get Gfu",
  })
  @get()
  static getGfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfu",
  })
  @post("{id}")
  static createGfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
