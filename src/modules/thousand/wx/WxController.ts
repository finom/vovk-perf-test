import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wx")
export default class WxController {
  @operation({
    summary: "Get Wx",
  })
  @get()
  static getWx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wx",
  })
  @post("{id}")
  static createWx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
