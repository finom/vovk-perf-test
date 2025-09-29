import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btas")
export default class BtaController {
  @operation({
    summary: "Get Btas",
  })
  @get()
  static getBtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bta",
  })
  @post("{id}")
  static createBta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
