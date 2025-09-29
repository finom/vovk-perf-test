import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zas")
export default class ZaController {
  @operation({
    summary: "Get Zas",
  })
  @get()
  static getZas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Za",
  })
  @post("{id}")
  static createZa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
