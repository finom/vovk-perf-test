import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqls")
export default class HqlController {
  @operation({
    summary: "Get Hqls",
  })
  @get()
  static getHqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hql",
  })
  @post("{id}")
  static createHql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
