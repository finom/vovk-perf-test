import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgd")
export default class BgdController {
  @operation({
    summary: "Get Bgd",
  })
  @get()
  static getBgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgd",
  })
  @post("{id}")
  static createBgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
