import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxw")
export default class DxwController {
  @operation({
    summary: "Get Dxw",
  })
  @get()
  static getDxw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxw",
  })
  @post("{id}")
  static createDxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
