import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnl")
export default class NnlController {
  @operation({
    summary: "Get Nnl",
  })
  @get()
  static getNnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnl",
  })
  @post("{id}")
  static createNnl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
