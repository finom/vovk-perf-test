import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpxes")
export default class GpxController {
  @operation({
    summary: "Get Gpxes",
  })
  @get()
  static getGpxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpx",
  })
  @post("{id}")
  static createGpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
