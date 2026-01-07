import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxs")
export default class HxsController {
  @operation({
    summary: "Get Hxs",
  })
  @get()
  static getHxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxs",
  })
  @post("{id}")
  static createHxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
