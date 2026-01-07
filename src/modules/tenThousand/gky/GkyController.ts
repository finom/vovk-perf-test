import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gky")
export default class GkyController {
  @operation({
    summary: "Get Gky",
  })
  @get()
  static getGky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gky",
  })
  @post("{id}")
  static createGky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
