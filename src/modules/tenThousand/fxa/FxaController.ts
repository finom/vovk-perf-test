import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxas")
export default class FxaController {
  @operation({
    summary: "Get Fxas",
  })
  @get()
  static getFxas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxa",
  })
  @post("{id}")
  static createFxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
