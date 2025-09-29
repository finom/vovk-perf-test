import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbzs")
export default class DbzController {
  @operation({
    summary: "Get Dbzs",
  })
  @get()
  static getDbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbz",
  })
  @post("{id}")
  static createDbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
