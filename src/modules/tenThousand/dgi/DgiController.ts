import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgis")
export default class DgiController {
  @operation({
    summary: "Get Dgis",
  })
  @get()
  static getDgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgi",
  })
  @post("{id}")
  static createDgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
