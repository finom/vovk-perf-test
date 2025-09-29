import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbhs")
export default class DbhController {
  @operation({
    summary: "Get Dbhs",
  })
  @get()
  static getDbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbh",
  })
  @post("{id}")
  static createDbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
