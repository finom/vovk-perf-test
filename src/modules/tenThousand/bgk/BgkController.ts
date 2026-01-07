import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgk")
export default class BgkController {
  @operation({
    summary: "Get Bgk",
  })
  @get()
  static getBgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgk",
  })
  @post("{id}")
  static createBgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
