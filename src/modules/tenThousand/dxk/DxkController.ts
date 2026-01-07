import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxk")
export default class DxkController {
  @operation({
    summary: "Get Dxk",
  })
  @get()
  static getDxk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxk",
  })
  @post("{id}")
  static createDxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
