import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxns")
export default class DxnController {
  @operation({
    summary: "Get Dxns",
  })
  @get()
  static getDxns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxn",
  })
  @post("{id}")
  static createDxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
