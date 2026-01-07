import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyb")
export default class LybController {
  @operation({
    summary: "Get Lyb",
  })
  @get()
  static getLyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyb",
  })
  @post("{id}")
  static createLyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
