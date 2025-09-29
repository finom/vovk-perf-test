import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxos")
export default class MxoController {
  @operation({
    summary: "Get Mxos",
  })
  @get()
  static getMxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxo",
  })
  @post("{id}")
  static createMxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
