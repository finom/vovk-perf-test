import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("maxes")
export default class MaxController {
  @operation({
    summary: "Get Maxes",
  })
  @get()
  static getMaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Max",
  })
  @post("{id}")
  static createMax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
