import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyj")
export default class LyjController {
  @operation({
    summary: "Get Lyj",
  })
  @get()
  static getLyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyj",
  })
  @post("{id}")
  static createLyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
