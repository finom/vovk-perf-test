import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yl")
export default class YlController {
  @operation({
    summary: "Get Yl",
  })
  @get()
  static getYl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yl",
  })
  @post("{id}")
  static createYl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
