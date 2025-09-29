import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("livs")
export default class LivController {
  @operation({
    summary: "Get Livs",
  })
  @get()
  static getLivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Liv",
  })
  @post("{id}")
  static createLiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
