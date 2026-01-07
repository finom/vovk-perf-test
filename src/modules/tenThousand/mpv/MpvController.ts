import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpv")
export default class MpvController {
  @operation({
    summary: "Get Mpv",
  })
  @get()
  static getMpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpv",
  })
  @post("{id}")
  static createMpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
