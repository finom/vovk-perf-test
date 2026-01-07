import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tv")
export default class TvController {
  @operation({
    summary: "Get Tv",
  })
  @get()
  static getTv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tv",
  })
  @post("{id}")
  static createTv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
