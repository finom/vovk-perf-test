import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyp")
export default class LypController {
  @operation({
    summary: "Get Lyp",
  })
  @get()
  static getLyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyp",
  })
  @post("{id}")
  static createLyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
