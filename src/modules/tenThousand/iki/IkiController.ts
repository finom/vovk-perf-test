import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikis")
export default class IkiController {
  @operation({
    summary: "Get Ikis",
  })
  @get()
  static getIkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iki",
  })
  @post("{id}")
  static createIki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
