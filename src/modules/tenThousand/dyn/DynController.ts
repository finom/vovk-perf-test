import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyns")
export default class DynController {
  @operation({
    summary: "Get Dyns",
  })
  @get()
  static getDyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyn",
  })
  @post("{id}")
  static createDyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
