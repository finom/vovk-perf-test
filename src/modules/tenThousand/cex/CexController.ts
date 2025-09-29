import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cexes")
export default class CexController {
  @operation({
    summary: "Get Cexes",
  })
  @get()
  static getCexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cex",
  })
  @post("{id}")
  static createCex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
