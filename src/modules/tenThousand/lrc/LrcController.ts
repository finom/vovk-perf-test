import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrc")
export default class LrcController {
  @operation({
    summary: "Get Lrc",
  })
  @get()
  static getLrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrc",
  })
  @post("{id}")
  static createLrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
