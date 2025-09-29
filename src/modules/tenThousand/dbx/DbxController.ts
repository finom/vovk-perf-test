import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbxes")
export default class DbxController {
  @operation({
    summary: "Get Dbxes",
  })
  @get()
  static getDbxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbx",
  })
  @post("{id}")
  static createDbx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
