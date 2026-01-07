import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buv")
export default class BuvController {
  @operation({
    summary: "Get Buv",
  })
  @get()
  static getBuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buv",
  })
  @post("{id}")
  static createBuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
