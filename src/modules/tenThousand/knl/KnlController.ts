import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knl")
export default class KnlController {
  @operation({
    summary: "Get Knl",
  })
  @get()
  static getKnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knl",
  })
  @post("{id}")
  static createKnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
