import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxls")
export default class DxlController {
  @operation({
    summary: "Get Dxls",
  })
  @get()
  static getDxls = procedure({
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
