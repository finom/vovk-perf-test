import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgm")
export default class BgmController {
  @operation({
    summary: "Get Bgm",
  })
  @get()
  static getBgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgm",
  })
  @post("{id}")
  static createBgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
