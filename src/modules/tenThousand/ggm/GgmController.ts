import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggm")
export default class GgmController {
  @operation({
    summary: "Get Ggm",
  })
  @get()
  static getGgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggm",
  })
  @post("{id}")
  static createGgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
