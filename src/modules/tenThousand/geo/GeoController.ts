import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geos")
export default class GeoController {
  @operation({
    summary: "Get Geos",
  })
  @get()
  static getGeos = procedure({
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
