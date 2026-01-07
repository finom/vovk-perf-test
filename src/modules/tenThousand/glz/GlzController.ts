import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glz")
export default class GlzController {
  @operation({
    summary: "Get Glz",
  })
  @get()
  static getGlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glz",
  })
  @post("{id}")
  static createGlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
