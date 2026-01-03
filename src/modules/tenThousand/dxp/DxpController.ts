import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxps")
export default class DxpController {
  @operation({
    summary: "Get Dxps",
  })
  @get()
  static getDxps = procedure({
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
