import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwgs")
export default class DwgController {
  @operation({
    summary: "Get Dwgs",
  })
  @get()
  static getDwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwg",
  })
  @post("{id}")
  static createDwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
