import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxos")
export default class KxoController {
  @operation({
    summary: "Get Kxos",
  })
  @get()
  static getKxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxo",
  })
  @post("{id}")
  static createKxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
