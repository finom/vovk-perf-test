import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gas")
export default class GaController {
  @operation({
    summary: "Get Gas",
  })
  @get()
  static getGas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ga",
  })
  @post("{id}")
  static createGa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
