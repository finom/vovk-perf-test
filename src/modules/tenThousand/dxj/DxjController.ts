import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxj")
export default class DxjController {
  @operation({
    summary: "Get Dxj",
  })
  @get()
  static getDxj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxj",
  })
  @post("{id}")
  static createDxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
