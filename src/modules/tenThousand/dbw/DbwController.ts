import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbws")
export default class DbwController {
  @operation({
    summary: "Get Dbws",
  })
  @get()
  static getDbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbw",
  })
  @post("{id}")
  static createDbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
