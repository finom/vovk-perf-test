import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxv")
export default class DxvController {
  @operation({
    summary: "Get Dxv",
  })
  @get()
  static getDxv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxv",
  })
  @post("{id}")
  static createDxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
