import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpis")
export default class DpiController {
  @operation({
    summary: "Get Dpis",
  })
  @get()
  static getDpis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpi",
  })
  @post("{id}")
  static createDpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
