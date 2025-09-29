import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxos")
export default class GxoController {
  @operation({
    summary: "Get Gxos",
  })
  @get()
  static getGxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxo",
  })
  @post("{id}")
  static createGxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
