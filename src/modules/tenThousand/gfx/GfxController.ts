import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfx")
export default class GfxController {
  @operation({
    summary: "Get Gfx",
  })
  @get()
  static getGfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfx",
  })
  @post("{id}")
  static createGfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
