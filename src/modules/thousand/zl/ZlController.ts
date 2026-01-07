import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zl")
export default class ZlController {
  @operation({
    summary: "Get Zl",
  })
  @get()
  static getZl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zl",
  })
  @post("{id}")
  static createZl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
