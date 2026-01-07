import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yy")
export default class YyController {
  @operation({
    summary: "Get Yy",
  })
  @get()
  static getYy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yy",
  })
  @post("{id}")
  static createYy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
