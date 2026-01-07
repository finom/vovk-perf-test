import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnb")
export default class LnbController {
  @operation({
    summary: "Get Lnb",
  })
  @get()
  static getLnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnb",
  })
  @post("{id}")
  static createLnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
