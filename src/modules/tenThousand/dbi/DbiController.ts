import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbis")
export default class DbiController {
  @operation({
    summary: "Get Dbis",
  })
  @get()
  static getDbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbi",
  })
  @post("{id}")
  static createDbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
