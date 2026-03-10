import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpi")
export default class KpiController {
  @operation({
    summary: "Get Kpi",
  })
  @get()
  static getKpi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpi",
  })
  @post("{id}")
  static createKpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
