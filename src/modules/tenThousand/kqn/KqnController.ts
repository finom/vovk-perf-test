import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqns")
export default class KqnController {
  @operation({
    summary: "Get Kqns",
  })
  @get()
  static getKqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqn",
  })
  @post("{id}")
  static createKqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
