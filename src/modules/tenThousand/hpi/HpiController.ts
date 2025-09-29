import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpis")
export default class HpiController {
  @operation({
    summary: "Get Hpis",
  })
  @get()
  static getHpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpi",
  })
  @post("{id}")
  static createHpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
