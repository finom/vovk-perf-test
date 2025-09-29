import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggrs")
export default class GgrController {
  @operation({
    summary: "Get Ggrs",
  })
  @get()
  static getGgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggr",
  })
  @post("{id}")
  static createGgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
