import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxh")
export default class DxhController {
  @operation({
    summary: "Get Dxh",
  })
  @get()
  static getDxh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxh",
  })
  @post("{id}")
  static createDxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
