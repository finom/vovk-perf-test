import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxos")
export default class FxoController {
  @operation({
    summary: "Get Fxos",
  })
  @get()
  static getFxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxo",
  })
  @post("{id}")
  static createFxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
