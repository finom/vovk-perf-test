import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gck")
export default class GckController {
  @operation({
    summary: "Get Gck",
  })
  @get()
  static getGck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gck",
  })
  @post("{id}")
  static createGck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
