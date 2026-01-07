import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpd")
export default class GpdController {
  @operation({
    summary: "Get Gpd",
  })
  @get()
  static getGpd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpd",
  })
  @post("{id}")
  static createGpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
