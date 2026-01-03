import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgis")
export default class FgiController {
  @operation({
    summary: "Get Fgis",
  })
  @get()
  static getFgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgi",
  })
  @post("{id}")
  static createFgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
