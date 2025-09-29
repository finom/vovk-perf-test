import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbps")
export default class DbpController {
  @operation({
    summary: "Get Dbps",
  })
  @get()
  static getDbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbp",
  })
  @post("{id}")
  static createDbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
