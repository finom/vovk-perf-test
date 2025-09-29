import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqns")
export default class JqnController {
  @operation({
    summary: "Get Jqns",
  })
  @get()
  static getJqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqn",
  })
  @post("{id}")
  static createJqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
