import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfv")
export default class GfvController {
  @operation({
    summary: "Get Gfv",
  })
  @get()
  static getGfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfv",
  })
  @post("{id}")
  static createGfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
