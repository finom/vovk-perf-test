import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldws")
export default class LdwController {
  @operation({
    summary: "Get Ldws",
  })
  @get()
  static getLdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldw",
  })
  @post("{id}")
  static createLdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
