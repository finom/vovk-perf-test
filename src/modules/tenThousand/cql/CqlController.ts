import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqls")
export default class CqlController {
  @operation({
    summary: "Get Cqls",
  })
  @get()
  static getCqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cql",
  })
  @post("{id}")
  static createCql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
