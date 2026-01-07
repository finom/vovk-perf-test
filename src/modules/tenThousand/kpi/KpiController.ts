import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpi")
export default class KpiController {
  @operation({
    summary: "Get Kpi",
  })
  @get()
  static getKpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpi",
  })
  @post("{id}")
  static createKpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
