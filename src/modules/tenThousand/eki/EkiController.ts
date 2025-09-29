import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekis")
export default class EkiController {
  @operation({
    summary: "Get Ekis",
  })
  @get()
  static getEkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eki",
  })
  @post("{id}")
  static createEki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
