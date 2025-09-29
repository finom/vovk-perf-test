import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgrs")
export default class MgrController {
  @operation({
    summary: "Get Mgrs",
  })
  @get()
  static getMgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgr",
  })
  @post("{id}")
  static createMgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
