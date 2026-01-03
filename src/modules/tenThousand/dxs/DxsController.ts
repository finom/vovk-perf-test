import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxs")
export default class DxsController {
  @operation({
    summary: "Get Dxs",
  })
  @get()
  static getDxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxs",
  })
  @post("{id}")
  static createDxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
