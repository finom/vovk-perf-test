import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbns")
export default class DbnController {
  @operation({
    summary: "Get Dbns",
  })
  @get()
  static getDbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbn",
  })
  @post("{id}")
  static createDbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
