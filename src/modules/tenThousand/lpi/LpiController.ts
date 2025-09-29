import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpis")
export default class LpiController {
  @operation({
    summary: "Get Lpis",
  })
  @get()
  static getLpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpi",
  })
  @post("{id}")
  static createLpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
