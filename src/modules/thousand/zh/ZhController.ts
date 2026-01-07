import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zh")
export default class ZhController {
  @operation({
    summary: "Get Zh",
  })
  @get()
  static getZh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zh",
  })
  @post("{id}")
  static createZh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
