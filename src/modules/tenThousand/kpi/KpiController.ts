import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpis")
export default class KpiController {
  @operation({
    summary: "Get Kpis",
  })
  @get()
  static getKpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpi",
  })
  @post("{id}")
  static createKpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
