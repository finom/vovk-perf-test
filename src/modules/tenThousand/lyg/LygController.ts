import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyg")
export default class LygController {
  @operation({
    summary: "Get Lyg",
  })
  @get()
  static getLyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyg",
  })
  @post("{id}")
  static createLyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
