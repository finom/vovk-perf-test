import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecos")
export default class EcoController {
  @operation({
    summary: "Get Ecos",
  })
  @get()
  static getEcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eco",
  })
  @post("{id}")
  static createEco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
