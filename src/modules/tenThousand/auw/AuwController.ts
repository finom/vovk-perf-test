import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auws")
export default class AuwController {
  @operation({
    summary: "Get Auws",
  })
  @get()
  static getAuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auw",
  })
  @post("{id}")
  static createAuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
