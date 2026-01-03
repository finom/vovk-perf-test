import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpis")
export default class LpiController {
  @operation({
    summary: "Get Lpis",
  })
  @get()
  static getLpis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpi",
  })
  @post("{id}")
  static createLpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
