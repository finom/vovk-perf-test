import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxos")
export default class HxoController {
  @operation({
    summary: "Get Hxos",
  })
  @get()
  static getHxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxo",
  })
  @post("{id}")
  static createHxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
