import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgb")
export default class BgbController {
  @operation({
    summary: "Get Bgb",
  })
  @get()
  static getBgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgb",
  })
  @post("{id}")
  static createBgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
