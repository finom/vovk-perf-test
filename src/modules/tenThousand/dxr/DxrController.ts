import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxrs")
export default class DxrController {
  @operation({
    summary: "Get Dxrs",
  })
  @get()
  static getDxrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxr",
  })
  @post("{id}")
  static createDxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
