import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyc")
export default class LycController {
  @operation({
    summary: "Get Lyc",
  })
  @get()
  static getLyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyc",
  })
  @post("{id}")
  static createLyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
