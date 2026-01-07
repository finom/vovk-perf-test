import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lim")
export default class LimController {
  @operation({
    summary: "Get Lim",
  })
  @get()
  static getLim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lim",
  })
  @post("{id}")
  static createLim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
