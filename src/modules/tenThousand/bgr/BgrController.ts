import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgr")
export default class BgrController {
  @operation({
    summary: "Get Bgr",
  })
  @get()
  static getBgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgr",
  })
  @post("{id}")
  static createBgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
