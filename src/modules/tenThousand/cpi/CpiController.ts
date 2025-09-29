import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpis")
export default class CpiController {
  @operation({
    summary: "Get Cpis",
  })
  @get()
  static getCpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpi",
  })
  @post("{id}")
  static createCpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
