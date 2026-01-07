import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glb")
export default class GlbController {
  @operation({
    summary: "Get Glb",
  })
  @get()
  static getGlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glb",
  })
  @post("{id}")
  static createGlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
