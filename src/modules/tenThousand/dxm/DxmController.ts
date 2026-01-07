import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxm")
export default class DxmController {
  @operation({
    summary: "Get Dxm",
  })
  @get()
  static getDxm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxm",
  })
  @post("{id}")
  static createDxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
