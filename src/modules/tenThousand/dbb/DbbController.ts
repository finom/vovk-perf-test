import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbbs")
export default class DbbController {
  @operation({
    summary: "Get Dbbs",
  })
  @get()
  static getDbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbb",
  })
  @post("{id}")
  static createDbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
