import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxos")
export default class CxoController {
  @operation({
    summary: "Get Cxos",
  })
  @get()
  static getCxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxo",
  })
  @post("{id}")
  static createCxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
