import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxu")
export default class DxuController {
  @operation({
    summary: "Get Dxu",
  })
  @get()
  static getDxu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxu",
  })
  @post("{id}")
  static createDxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
