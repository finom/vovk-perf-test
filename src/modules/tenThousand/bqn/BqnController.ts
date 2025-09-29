import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqns")
export default class BqnController {
  @operation({
    summary: "Get Bqns",
  })
  @get()
  static getBqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqn",
  })
  @post("{id}")
  static createBqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
