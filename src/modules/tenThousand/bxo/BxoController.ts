import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxos")
export default class BxoController {
  @operation({
    summary: "Get Bxos",
  })
  @get()
  static getBxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxo",
  })
  @post("{id}")
  static createBxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
