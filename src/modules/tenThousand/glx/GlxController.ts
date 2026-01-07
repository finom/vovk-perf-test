import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glx")
export default class GlxController {
  @operation({
    summary: "Get Glx",
  })
  @get()
  static getGlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glx",
  })
  @post("{id}")
  static createGlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
