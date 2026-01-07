import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxb")
export default class DxbController {
  @operation({
    summary: "Get Dxb",
  })
  @get()
  static getDxb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxb",
  })
  @post("{id}")
  static createDxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
