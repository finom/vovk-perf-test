import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esqs")
export default class EsqController {
  @operation({
    summary: "Get Esqs",
  })
  @get()
  static getEsqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esq",
  })
  @post("{id}")
  static createEsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
