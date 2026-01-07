import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxo")
export default class FxoController {
  @operation({
    summary: "Get Fxo",
  })
  @get()
  static getFxo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxo",
  })
  @post("{id}")
  static createFxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
