import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxcs")
export default class DxcController {
  @operation({
    summary: "Get Dxcs",
  })
  @get()
  static getDxcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxc",
  })
  @post("{id}")
  static createDxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
