import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chv")
export default class ChvController {
  @operation({
    summary: "Get Chv",
  })
  @get()
  static getChv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chv",
  })
  @post("{id}")
  static createChv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
