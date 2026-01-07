import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gws")
export default class GwsController {
  @operation({
    summary: "Get Gws",
  })
  @get()
  static getGws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gws",
  })
  @post("{id}")
  static createGws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
