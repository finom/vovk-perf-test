import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxqs")
export default class DxqController {
  @operation({
    summary: "Get Dxqs",
  })
  @get()
  static getDxqs = procedure({
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
