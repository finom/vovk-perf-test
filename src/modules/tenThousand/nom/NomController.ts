import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("noms")
export default class NomController {
  @operation({
    summary: "Get Noms",
  })
  @get()
  static getNoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nom",
  })
  @post("{id}")
  static createNom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
