import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnl")
export default class MnlController {
  @operation({
    summary: "Get Mnl",
  })
  @get()
  static getMnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnl",
  })
  @post("{id}")
  static createMnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
