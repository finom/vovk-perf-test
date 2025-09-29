import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxos")
export default class LxoController {
  @operation({
    summary: "Get Lxos",
  })
  @get()
  static getLxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxo",
  })
  @post("{id}")
  static createLxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
