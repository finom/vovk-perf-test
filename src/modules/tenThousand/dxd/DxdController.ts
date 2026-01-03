import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxds")
export default class DxdController {
  @operation({
    summary: "Get Dxds",
  })
  @get()
  static getDxds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxd",
  })
  @post("{id}")
  static createDxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
