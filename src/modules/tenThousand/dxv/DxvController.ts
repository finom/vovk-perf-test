import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxvs")
export default class DxvController {
  @operation({
    summary: "Get Dxvs",
  })
  @get()
  static getDxvs = procedure({
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
