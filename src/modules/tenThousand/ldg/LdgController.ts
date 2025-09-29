import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldgs")
export default class LdgController {
  @operation({
    summary: "Get Ldgs",
  })
  @get()
  static getLdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldg",
  })
  @post("{id}")
  static createLdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
