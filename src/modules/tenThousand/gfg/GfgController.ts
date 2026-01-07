import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfg")
export default class GfgController {
  @operation({
    summary: "Get Gfg",
  })
  @get()
  static getGfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfg",
  })
  @post("{id}")
  static createGfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
