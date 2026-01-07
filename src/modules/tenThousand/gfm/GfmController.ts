import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfm")
export default class GfmController {
  @operation({
    summary: "Get Gfm",
  })
  @get()
  static getGfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfm",
  })
  @post("{id}")
  static createGfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
