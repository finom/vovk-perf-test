import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldms")
export default class LdmController {
  @operation({
    summary: "Get Ldms",
  })
  @get()
  static getLdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldm",
  })
  @post("{id}")
  static createLdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
