import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfu")
export default class HfuController {
  @operation({
    summary: "Get Hfu",
  })
  @get()
  static getHfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfu",
  })
  @post("{id}")
  static createHfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
