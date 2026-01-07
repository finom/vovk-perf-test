import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjs")
export default class GjsController {
  @operation({
    summary: "Get Gjs",
  })
  @get()
  static getGjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjs",
  })
  @post("{id}")
  static createGjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
