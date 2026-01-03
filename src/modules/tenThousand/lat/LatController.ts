import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lats")
export default class LatController {
  @operation({
    summary: "Get Lats",
  })
  @get()
  static getLats = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lat",
  })
  @post("{id}")
  static createLat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
