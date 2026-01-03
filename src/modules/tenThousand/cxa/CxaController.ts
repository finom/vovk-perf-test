import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxas")
export default class CxaController {
  @operation({
    summary: "Get Cxas",
  })
  @get()
  static getCxas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxa",
  })
  @post("{id}")
  static createCxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
