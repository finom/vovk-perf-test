import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxp")
export default class DxpController {
  @operation({
    summary: "Get Dxp",
  })
  @get()
  static getDxp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxp",
  })
  @post("{id}")
  static createDxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
