import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mp")
export default class MpController {
  @operation({
    summary: "Get Mp",
  })
  @get()
  static getMp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mp",
  })
  @post("{id}")
  static createMp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
