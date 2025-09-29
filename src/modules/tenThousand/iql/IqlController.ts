import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqls")
export default class IqlController {
  @operation({
    summary: "Get Iqls",
  })
  @get()
  static getIqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iql",
  })
  @post("{id}")
  static createIql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
