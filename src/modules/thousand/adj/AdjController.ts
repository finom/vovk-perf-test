import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adj")
export default class AdjController {
  @operation({
    summary: "Get Adj",
  })
  @get()
  static getAdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adj",
  })
  @post("{id}")
  static createAdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
