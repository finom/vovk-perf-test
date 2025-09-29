import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktas")
export default class KtaController {
  @operation({
    summary: "Get Ktas",
  })
  @get()
  static getKtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kta",
  })
  @post("{id}")
  static createKta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
