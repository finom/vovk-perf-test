import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxos")
export default class DxoController {
  @operation({
    summary: "Get Dxos",
  })
  @get()
  static getDxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxo",
  })
  @post("{id}")
  static createDxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
