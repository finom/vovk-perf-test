import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esas")
export default class EsaController {
  @operation({
    summary: "Get Esas",
  })
  @get()
  static getEsas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esa",
  })
  @post("{id}")
  static createEsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
