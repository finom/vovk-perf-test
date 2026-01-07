import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mim")
export default class MimController {
  @operation({
    summary: "Get Mim",
  })
  @get()
  static getMim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mim",
  })
  @post("{id}")
  static createMim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
