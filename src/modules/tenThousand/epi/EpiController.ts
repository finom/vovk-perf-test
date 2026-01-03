import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epis")
export default class EpiController {
  @operation({
    summary: "Get Epis",
  })
  @get()
  static getEpis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epi",
  })
  @post("{id}")
  static createEpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
