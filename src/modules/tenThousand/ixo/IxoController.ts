import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixos")
export default class IxoController {
  @operation({
    summary: "Get Ixos",
  })
  @get()
  static getIxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixo",
  })
  @post("{id}")
  static createIxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
