import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gis")
export default class GisController {
  @operation({
    summary: "Get Gis",
  })
  @get()
  static getGis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gis",
  })
  @post("{id}")
  static createGis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
