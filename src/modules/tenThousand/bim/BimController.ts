import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bim")
export default class BimController {
  @operation({
    summary: "Get Bim",
  })
  @get()
  static getBim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bim",
  })
  @post("{id}")
  static createBim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
