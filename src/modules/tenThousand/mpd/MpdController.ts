import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpd")
export default class MpdController {
  @operation({
    summary: "Get Mpd",
  })
  @get()
  static getMpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpd",
  })
  @post("{id}")
  static createMpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
