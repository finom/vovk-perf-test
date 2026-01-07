import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxs")
export default class GxsController {
  @operation({
    summary: "Get Gxs",
  })
  @get()
  static getGxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxs",
  })
  @post("{id}")
  static createGxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
