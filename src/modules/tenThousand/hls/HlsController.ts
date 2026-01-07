import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hls")
export default class HlsController {
  @operation({
    summary: "Get Hls",
  })
  @get()
  static getHls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hls",
  })
  @post("{id}")
  static createHls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
