import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glw")
export default class GlwController {
  @operation({
    summary: "Get Glw",
  })
  @get()
  static getGlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glw",
  })
  @post("{id}")
  static createGlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
