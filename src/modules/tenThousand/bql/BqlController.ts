import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqls")
export default class BqlController {
  @operation({
    summary: "Get Bqls",
  })
  @get()
  static getBqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bql",
  })
  @post("{id}")
  static createBql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
