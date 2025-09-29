import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntis")
export default class NtiController {
  @operation({
    summary: "Get Ntis",
  })
  @get()
  static getNtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nti",
  })
  @post("{id}")
  static createNti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
