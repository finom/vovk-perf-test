import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxzs")
export default class DxzController {
  @operation({
    summary: "Get Dxzs",
  })
  @get()
  static getDxzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxz",
  })
  @post("{id}")
  static createDxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
