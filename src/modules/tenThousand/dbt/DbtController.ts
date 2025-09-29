import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbts")
export default class DbtController {
  @operation({
    summary: "Get Dbts",
  })
  @get()
  static getDbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbt",
  })
  @post("{id}")
  static createDbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
