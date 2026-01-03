import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csas")
export default class CsaController {
  @operation({
    summary: "Get Csas",
  })
  @get()
  static getCsas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csa",
  })
  @post("{id}")
  static createCsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
