import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldvs")
export default class LdvController {
  @operation({
    summary: "Get Ldvs",
  })
  @get()
  static getLdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldv",
  })
  @post("{id}")
  static createLdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
