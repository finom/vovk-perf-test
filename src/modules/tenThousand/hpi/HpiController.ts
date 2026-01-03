import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpis")
export default class HpiController {
  @operation({
    summary: "Get Hpis",
  })
  @get()
  static getHpis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpi",
  })
  @post("{id}")
  static createHpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
