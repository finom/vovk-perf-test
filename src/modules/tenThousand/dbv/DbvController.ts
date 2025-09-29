import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbvs")
export default class DbvController {
  @operation({
    summary: "Get Dbvs",
  })
  @get()
  static getDbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbv",
  })
  @post("{id}")
  static createDbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
