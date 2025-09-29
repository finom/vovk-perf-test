import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsas")
export default class DsaController {
  @operation({
    summary: "Get Dsas",
  })
  @get()
  static getDsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsa",
  })
  @post("{id}")
  static createDsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
