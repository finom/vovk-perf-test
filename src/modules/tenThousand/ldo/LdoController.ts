import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldos")
export default class LdoController {
  @operation({
    summary: "Get Ldos",
  })
  @get()
  static getLdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldo",
  })
  @post("{id}")
  static createLdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
