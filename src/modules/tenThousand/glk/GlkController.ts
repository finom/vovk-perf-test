import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glk")
export default class GlkController {
  @operation({
    summary: "Get Glk",
  })
  @get()
  static getGlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glk",
  })
  @post("{id}")
  static createGlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
