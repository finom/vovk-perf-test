import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbgs")
export default class DbgController {
  @operation({
    summary: "Get Dbgs",
  })
  @get()
  static getDbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbg",
  })
  @post("{id}")
  static createDbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
