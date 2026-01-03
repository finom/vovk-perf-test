import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxos")
export default class DxoController {
  @operation({
    summary: "Get Dxos",
  })
  @get()
  static getDxos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxo",
  })
  @post("{id}")
  static createDxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
