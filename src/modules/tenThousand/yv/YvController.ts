import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yv")
export default class YvController {
  @operation({
    summary: "Get Yv",
  })
  @get()
  static getYv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yv",
  })
  @post("{id}")
  static createYv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
