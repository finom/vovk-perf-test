import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glq")
export default class GlqController {
  @operation({
    summary: "Get Glq",
  })
  @get()
  static getGlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glq",
  })
  @post("{id}")
  static createGlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
