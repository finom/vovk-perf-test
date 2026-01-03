import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxhs")
export default class DxhController {
  @operation({
    summary: "Get Dxhs",
  })
  @get()
  static getDxhs = procedure({
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
