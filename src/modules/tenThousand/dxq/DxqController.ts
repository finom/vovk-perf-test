import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxq")
export default class DxqController {
  @operation({
    summary: "Get Dxq",
  })
  @get()
  static getDxq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxq",
  })
  @post("{id}")
  static createDxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
