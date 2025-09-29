import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqls")
export default class FqlController {
  @operation({
    summary: "Get Fqls",
  })
  @get()
  static getFqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fql",
  })
  @post("{id}")
  static createFql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
