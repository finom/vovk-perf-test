import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbas")
export default class DbaController {
  @operation({
    summary: "Get Dbas",
  })
  @get()
  static getDbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dba",
  })
  @post("{id}")
  static createDba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
