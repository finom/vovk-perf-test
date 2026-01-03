import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxfs")
export default class DxfController {
  @operation({
    summary: "Get Dxfs",
  })
  @get()
  static getDxfs = procedure({
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
