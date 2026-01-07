import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpx")
export default class GpxController {
  @operation({
    summary: "Get Gpx",
  })
  @get()
  static getGpx = procedure({
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
