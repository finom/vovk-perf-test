import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glh")
export default class GlhController {
  @operation({
    summary: "Get Glh",
  })
  @get()
  static getGlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glh",
  })
  @post("{id}")
  static createGlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
