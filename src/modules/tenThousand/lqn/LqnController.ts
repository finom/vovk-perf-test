import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqns")
export default class LqnController {
  @operation({
    summary: "Get Lqns",
  })
  @get()
  static getLqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqn",
  })
  @post("{id}")
  static createLqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
