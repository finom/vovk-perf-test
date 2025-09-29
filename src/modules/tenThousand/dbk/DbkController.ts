import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbks")
export default class DbkController {
  @operation({
    summary: "Get Dbks",
  })
  @get()
  static getDbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbk",
  })
  @post("{id}")
  static createDbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
