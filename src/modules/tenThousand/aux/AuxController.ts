import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auxes")
export default class AuxController {
  @operation({
    summary: "Get Auxes",
  })
  @get()
  static getAuxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aux",
  })
  @post("{id}")
  static createAux = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
