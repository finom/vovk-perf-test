import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnl")
export default class BnlController {
  @operation({
    summary: "Get Bnl",
  })
  @get()
  static getBnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnl",
  })
  @post("{id}")
  static createBnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
