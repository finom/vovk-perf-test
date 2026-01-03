import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgis")
export default class MgiController {
  @operation({
    summary: "Get Mgis",
  })
  @get()
  static getMgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgi",
  })
  @post("{id}")
  static createMgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
