import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyy")
export default class LyyController {
  @operation({
    summary: "Get Lyy",
  })
  @get()
  static getLyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyy",
  })
  @post("{id}")
  static createLyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
