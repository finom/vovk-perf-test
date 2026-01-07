import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wv")
export default class WvController {
  @operation({
    summary: "Get Wv",
  })
  @get()
  static getWv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wv",
  })
  @post("{id}")
  static createWv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
