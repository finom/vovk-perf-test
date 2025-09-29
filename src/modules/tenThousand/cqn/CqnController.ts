import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqns")
export default class CqnController {
  @operation({
    summary: "Get Cqns",
  })
  @get()
  static getCqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqn",
  })
  @post("{id}")
  static createCqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
