import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwg")
export default class DwgController {
  @operation({
    summary: "Get Dwg",
  })
  @get()
  static getDwg = procedure({
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
