import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxl")
export default class DxlController {
  @operation({
    summary: "Get Dxl",
  })
  @get()
  static getDxl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxl",
  })
  @post("{id}")
  static createDxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
