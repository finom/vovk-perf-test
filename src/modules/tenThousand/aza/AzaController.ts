import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azas")
export default class AzaController {
  @operation({
    summary: "Get Azas",
  })
  @get()
  static getAzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aza",
  })
  @post("{id}")
  static createAza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
