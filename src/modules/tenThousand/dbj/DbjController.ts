import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbjs")
export default class DbjController {
  @operation({
    summary: "Get Dbjs",
  })
  @get()
  static getDbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbj",
  })
  @post("{id}")
  static createDbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
