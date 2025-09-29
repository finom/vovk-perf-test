import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npls")
export default class NplController {
  @operation({
    summary: "Get Npls",
  })
  @get()
  static getNpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npl",
  })
  @post("{id}")
  static createNpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
