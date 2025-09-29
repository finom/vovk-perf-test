import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctes")
export default class CteController {
  @operation({
    summary: "Get Ctes",
  })
  @get()
  static getCtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cte",
  })
  @post("{id}")
  static createCte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
