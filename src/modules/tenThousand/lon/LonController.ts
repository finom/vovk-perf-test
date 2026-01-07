import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lon")
export default class LonController {
  @operation({
    summary: "Get Lon",
  })
  @get()
  static getLon = procedure({
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
