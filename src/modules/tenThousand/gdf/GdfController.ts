import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdfs")
export default class GdfController {
  @operation({
    summary: "Get Gdfs",
  })
  @get()
  static getGdfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdf",
  })
  @post("{id}")
  static createGdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
