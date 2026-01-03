import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgis")
export default class JgiController {
  @operation({
    summary: "Get Jgis",
  })
  @get()
  static getJgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgi",
  })
  @post("{id}")
  static createJgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
