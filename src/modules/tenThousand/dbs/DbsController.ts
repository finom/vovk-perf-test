import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbs")
export default class DbsController {
  @operation({
    summary: "Get Dbs",
  })
  @get()
  static getDbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbs",
  })
  @post("{id}")
  static createDbs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
