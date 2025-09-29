import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqls")
export default class LqlController {
  @operation({
    summary: "Get Lqls",
  })
  @get()
  static getLqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lql",
  })
  @post("{id}")
  static createLql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
