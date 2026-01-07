import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glv")
export default class GlvController {
  @operation({
    summary: "Get Glv",
  })
  @get()
  static getGlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glv",
  })
  @post("{id}")
  static createGlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
