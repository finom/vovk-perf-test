import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgns")
export default class LgnController {
  @operation({
    summary: "Get Lgns",
  })
  @get()
  static getLgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgn",
  })
  @post("{id}")
  static createLgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
