import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glp")
export default class GlpController {
  @operation({
    summary: "Get Glp",
  })
  @get()
  static getGlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glp",
  })
  @post("{id}")
  static createGlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
