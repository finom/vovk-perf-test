import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgrs")
export default class HgrController {
  @operation({
    summary: "Get Hgrs",
  })
  @get()
  static getHgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgr",
  })
  @post("{id}")
  static createHgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
