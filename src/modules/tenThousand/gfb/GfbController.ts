import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfb")
export default class GfbController {
  @operation({
    summary: "Get Gfb",
  })
  @get()
  static getGfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfb",
  })
  @post("{id}")
  static createGfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
