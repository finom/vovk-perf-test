import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebm")
export default class EbmController {
  @operation({
    summary: "Get Ebm",
  })
  @get()
  static getEbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebm",
  })
  @post("{id}")
  static createEbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
