import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aggs")
export default class AggController {
  @operation({
    summary: "Get Aggs",
  })
  @get()
  static getAggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agg",
  })
  @post("{id}")
  static createAgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
