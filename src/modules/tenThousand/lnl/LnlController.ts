import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnl")
export default class LnlController {
  @operation({
    summary: "Get Lnl",
  })
  @get()
  static getLnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnl",
  })
  @post("{id}")
  static createLnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
