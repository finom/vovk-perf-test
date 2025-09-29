import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avgs")
export default class AvgController {
  @operation({
    summary: "Get Avgs",
  })
  @get()
  static getAvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avg",
  })
  @post("{id}")
  static createAvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
