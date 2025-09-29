import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekcs")
export default class EkcController {
  @operation({
    summary: "Get Ekcs",
  })
  @get()
  static getEkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekc",
  })
  @post("{id}")
  static createEkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
