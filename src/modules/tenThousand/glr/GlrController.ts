import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glr")
export default class GlrController {
  @operation({
    summary: "Get Glr",
  })
  @get()
  static getGlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glr",
  })
  @post("{id}")
  static createGlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
