import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxjs")
export default class DxjController {
  @operation({
    summary: "Get Dxjs",
  })
  @get()
  static getDxjs = procedure({
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
