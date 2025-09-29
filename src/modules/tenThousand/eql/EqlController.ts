import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqls")
export default class EqlController {
  @operation({
    summary: "Get Eqls",
  })
  @get()
  static getEqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eql",
  })
  @post("{id}")
  static createEql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
