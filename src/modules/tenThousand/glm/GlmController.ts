import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glm")
export default class GlmController {
  @operation({
    summary: "Get Glm",
  })
  @get()
  static getGlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glm",
  })
  @post("{id}")
  static createGlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
