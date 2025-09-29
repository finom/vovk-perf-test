import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldqs")
export default class LdqController {
  @operation({
    summary: "Get Ldqs",
  })
  @get()
  static getLdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldq",
  })
  @post("{id}")
  static createLdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
