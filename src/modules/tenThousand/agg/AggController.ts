import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agg")
export default class AggController {
  @operation({
    summary: "Get Agg",
  })
  @get()
  static getAgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agg",
  })
  @post("{id}")
  static createAgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
