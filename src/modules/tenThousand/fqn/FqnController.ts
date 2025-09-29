import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqns")
export default class FqnController {
  @operation({
    summary: "Get Fqns",
  })
  @get()
  static getFqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqn",
  })
  @post("{id}")
  static createFqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
