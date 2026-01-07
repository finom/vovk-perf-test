import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyh")
export default class LyhController {
  @operation({
    summary: "Get Lyh",
  })
  @get()
  static getLyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyh",
  })
  @post("{id}")
  static createLyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
