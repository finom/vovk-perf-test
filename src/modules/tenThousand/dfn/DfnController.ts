import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfns")
export default class DfnController {
  @operation({
    summary: "Get Dfns",
  })
  @get()
  static getDfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfn",
  })
  @post("{id}")
  static createDfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
