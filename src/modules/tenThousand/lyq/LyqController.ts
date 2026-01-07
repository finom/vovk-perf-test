import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyq")
export default class LyqController {
  @operation({
    summary: "Get Lyq",
  })
  @get()
  static getLyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyq",
  })
  @post("{id}")
  static createLyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
