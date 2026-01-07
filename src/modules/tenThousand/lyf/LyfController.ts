import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyf")
export default class LyfController {
  @operation({
    summary: "Get Lyf",
  })
  @get()
  static getLyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyf",
  })
  @post("{id}")
  static createLyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
