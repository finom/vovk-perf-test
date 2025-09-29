import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbms")
export default class DbmController {
  @operation({
    summary: "Get Dbms",
  })
  @get()
  static getDbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbm",
  })
  @post("{id}")
  static createDbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
