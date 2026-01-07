import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gim")
export default class GimController {
  @operation({
    summary: "Get Gim",
  })
  @get()
  static getGim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gim",
  })
  @post("{id}")
  static createGim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
