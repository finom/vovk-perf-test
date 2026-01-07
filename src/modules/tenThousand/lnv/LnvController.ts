import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnv")
export default class LnvController {
  @operation({
    summary: "Get Lnv",
  })
  @get()
  static getLnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnv",
  })
  @post("{id}")
  static createLnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
