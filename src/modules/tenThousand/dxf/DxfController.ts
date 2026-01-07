import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxf")
export default class DxfController {
  @operation({
    summary: "Get Dxf",
  })
  @get()
  static getDxf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxf",
  })
  @post("{id}")
  static createDxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
