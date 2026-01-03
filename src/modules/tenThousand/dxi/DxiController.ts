import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxis")
export default class DxiController {
  @operation({
    summary: "Get Dxis",
  })
  @get()
  static getDxis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxi",
  })
  @post("{id}")
  static createDxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
