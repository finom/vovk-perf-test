import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lons")
export default class LonController {
  @operation({
    summary: "Get Lons",
  })
  @get()
  static getLons = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lon",
  })
  @post("{id}")
  static createLon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
