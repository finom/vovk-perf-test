import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqns")
export default class HqnController {
  @operation({
    summary: "Get Hqns",
  })
  @get()
  static getHqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqn",
  })
  @post("{id}")
  static createHqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
