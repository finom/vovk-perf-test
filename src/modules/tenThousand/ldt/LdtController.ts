import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldts")
export default class LdtController {
  @operation({
    summary: "Get Ldts",
  })
  @get()
  static getLdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldt",
  })
  @post("{id}")
  static createLdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
