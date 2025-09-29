import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqns")
export default class IqnController {
  @operation({
    summary: "Get Iqns",
  })
  @get()
  static getIqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqn",
  })
  @post("{id}")
  static createIqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
