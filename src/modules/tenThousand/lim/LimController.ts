import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lims")
export default class LimController {
  @operation({
    summary: "Get Lims",
  })
  @get()
  static getLims = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lim",
  })
  @post("{id}")
  static createLim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
