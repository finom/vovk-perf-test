import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyv")
export default class LyvController {
  @operation({
    summary: "Get Lyv",
  })
  @get()
  static getLyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyv",
  })
  @post("{id}")
  static createLyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
