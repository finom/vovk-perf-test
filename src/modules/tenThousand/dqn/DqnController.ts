import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqns")
export default class DqnController {
  @operation({
    summary: "Get Dqns",
  })
  @get()
  static getDqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqn",
  })
  @post("{id}")
  static createDqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
