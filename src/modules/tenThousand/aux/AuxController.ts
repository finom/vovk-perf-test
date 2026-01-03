import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auxes")
export default class AuxController {
  @operation({
    summary: "Get Auxes",
  })
  @get()
  static getAuxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aux",
  })
  @post("{id}")
  static createAux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
