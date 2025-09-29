import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxos")
export default class JxoController {
  @operation({
    summary: "Get Jxos",
  })
  @get()
  static getJxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxo",
  })
  @post("{id}")
  static createJxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
