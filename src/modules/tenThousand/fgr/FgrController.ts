import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgrs")
export default class FgrController {
  @operation({
    summary: "Get Fgrs",
  })
  @get()
  static getFgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgr",
  })
  @post("{id}")
  static createFgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
