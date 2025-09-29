import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adns")
export default class AdnController {
  @operation({
    summary: "Get Adns",
  })
  @get()
  static getAdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adn",
  })
  @post("{id}")
  static createAdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
