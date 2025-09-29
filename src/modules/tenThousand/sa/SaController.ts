import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sas")
export default class SaController {
  @operation({
    summary: "Get Sas",
  })
  @get()
  static getSas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sa",
  })
  @post("{id}")
  static createSa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
