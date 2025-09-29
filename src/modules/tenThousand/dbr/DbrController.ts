import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbrs")
export default class DbrController {
  @operation({
    summary: "Get Dbrs",
  })
  @get()
  static getDbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbr",
  })
  @post("{id}")
  static createDbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
