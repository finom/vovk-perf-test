import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iim")
export default class IimController {
  @operation({
    summary: "Get Iim",
  })
  @get()
  static getIim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iim",
  })
  @post("{id}")
  static createIim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
