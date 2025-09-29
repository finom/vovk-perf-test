import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuos")
export default class KuoController {
  @operation({
    summary: "Get Kuos",
  })
  @get()
  static getKuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuo",
  })
  @post("{id}")
  static createKuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
