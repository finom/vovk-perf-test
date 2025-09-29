import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldxes")
export default class LdxController {
  @operation({
    summary: "Get Ldxes",
  })
  @get()
  static getLdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldx",
  })
  @post("{id}")
  static createLdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
