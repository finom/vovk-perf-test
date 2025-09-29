import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbies")
export default class DbyController {
  @operation({
    summary: "Get Dbies",
  })
  @get()
  static getDbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dby",
  })
  @post("{id}")
  static createDby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
