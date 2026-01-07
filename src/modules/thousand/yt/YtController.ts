import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yt")
export default class YtController {
  @operation({
    summary: "Get Yt",
  })
  @get()
  static getYt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yt",
  })
  @post("{id}")
  static createYt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
