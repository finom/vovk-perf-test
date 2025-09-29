import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wus")
export default class WuController {
  @operation({
    summary: "Get Wus",
  })
  @get()
  static getWus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wu",
  })
  @post("{id}")
  static createWu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
