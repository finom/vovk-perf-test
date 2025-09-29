import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbs")
export default class DbController {
  @operation({
    summary: "Get Dbs",
  })
  @get()
  static getDbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Db",
  })
  @post("{id}")
  static createDb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
