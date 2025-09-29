import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbos")
export default class DboController {
  @operation({
    summary: "Get Dbos",
  })
  @get()
  static getDbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbo",
  })
  @post("{id}")
  static createDbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
