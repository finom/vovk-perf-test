import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbqs")
export default class DbqController {
  @operation({
    summary: "Get Dbqs",
  })
  @get()
  static getDbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbq",
  })
  @post("{id}")
  static createDbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
