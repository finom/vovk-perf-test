import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqns")
export default class NqnController {
  @operation({
    summary: "Get Nqns",
  })
  @get()
  static getNqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqn",
  })
  @post("{id}")
  static createNqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
