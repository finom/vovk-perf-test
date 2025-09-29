import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqns")
export default class GqnController {
  @operation({
    summary: "Get Gqns",
  })
  @get()
  static getGqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqn",
  })
  @post("{id}")
  static createGqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
