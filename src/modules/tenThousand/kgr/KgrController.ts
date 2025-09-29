import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgrs")
export default class KgrController {
  @operation({
    summary: "Get Kgrs",
  })
  @get()
  static getKgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgr",
  })
  @post("{id}")
  static createKgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
