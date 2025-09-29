import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gas")
export default class GaController {
  @operation({
    summary: "Get Gas",
  })
  @get()
  static getGas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ga",
  })
  @post("{id}")
  static createGa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
