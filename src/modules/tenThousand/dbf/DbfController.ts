import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbfs")
export default class DbfController {
  @operation({
    summary: "Get Dbfs",
  })
  @get()
  static getDbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbf",
  })
  @post("{id}")
  static createDbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
