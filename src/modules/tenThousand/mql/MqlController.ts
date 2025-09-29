import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqls")
export default class MqlController {
  @operation({
    summary: "Get Mqls",
  })
  @get()
  static getMqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mql",
  })
  @post("{id}")
  static createMql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
