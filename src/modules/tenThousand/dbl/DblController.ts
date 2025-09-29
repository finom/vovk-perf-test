import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbls")
export default class DblController {
  @operation({
    summary: "Get Dbls",
  })
  @get()
  static getDbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbl",
  })
  @post("{id}")
  static createDbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
