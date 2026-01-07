import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlx")
export default class HlxController {
  @operation({
    summary: "Get Hlx",
  })
  @get()
  static getHlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlx",
  })
  @post("{id}")
  static createHlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
