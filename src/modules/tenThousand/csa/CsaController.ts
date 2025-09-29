import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csas")
export default class CsaController {
  @operation({
    summary: "Get Csas",
  })
  @get()
  static getCsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csa",
  })
  @post("{id}")
  static createCsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
