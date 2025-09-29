import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nobs")
export default class NobController {
  @operation({
    summary: "Get Nobs",
  })
  @get()
  static getNobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nob",
  })
  @post("{id}")
  static createNob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
