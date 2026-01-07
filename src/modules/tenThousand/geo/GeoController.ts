import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geo")
export default class GeoController {
  @operation({
    summary: "Get Geo",
  })
  @get()
  static getGeo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Geo",
  })
  @post("{id}")
  static createGeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
