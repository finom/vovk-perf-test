import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxe")
export default class DxeController {
  @operation({
    summary: "Get Dxe",
  })
  @get()
  static getDxe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxe",
  })
  @post("{id}")
  static createDxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
