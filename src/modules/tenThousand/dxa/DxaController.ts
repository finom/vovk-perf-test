import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxas")
export default class DxaController {
  @operation({
    summary: "Get Dxas",
  })
  @get()
  static getDxas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxa",
  })
  @post("{id}")
  static createDxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
