import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atn")
export default class AtnController {
  @operation({
    summary: "Get Atn",
  })
  @get()
  static getAtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atn",
  })
  @post("{id}")
  static createAtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
