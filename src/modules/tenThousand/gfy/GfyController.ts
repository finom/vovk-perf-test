import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfy")
export default class GfyController {
  @operation({
    summary: "Get Gfy",
  })
  @get()
  static getGfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfy",
  })
  @post("{id}")
  static createGfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
