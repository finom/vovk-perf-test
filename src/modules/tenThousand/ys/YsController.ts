import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ys")
export default class YsController {
  @operation({
    summary: "Get Ys",
  })
  @get()
  static getYs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ys",
  })
  @post("{id}")
  static createYs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
