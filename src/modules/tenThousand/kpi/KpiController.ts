import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpis")
export default class KpiController {
  @operation({
    summary: "Get Kpis",
  })
  @get()
  static getKpis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpi",
  })
  @post("{id}")
  static createKpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
