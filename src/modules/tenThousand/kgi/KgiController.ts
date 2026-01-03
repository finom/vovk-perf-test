import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgis")
export default class KgiController {
  @operation({
    summary: "Get Kgis",
  })
  @get()
  static getKgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgi",
  })
  @post("{id}")
  static createKgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
