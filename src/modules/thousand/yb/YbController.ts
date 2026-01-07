import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yb")
export default class YbController {
  @operation({
    summary: "Get Yb",
  })
  @get()
  static getYb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yb",
  })
  @post("{id}")
  static createYb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
