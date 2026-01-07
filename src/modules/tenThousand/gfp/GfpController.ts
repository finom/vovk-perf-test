import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfp")
export default class GfpController {
  @operation({
    summary: "Get Gfp",
  })
  @get()
  static getGfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfp",
  })
  @post("{id}")
  static createGfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
