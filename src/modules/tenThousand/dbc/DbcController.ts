import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbcs")
export default class DbcController {
  @operation({
    summary: "Get Dbcs",
  })
  @get()
  static getDbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbc",
  })
  @post("{id}")
  static createDbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
