import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akis")
export default class AkiController {
  @operation({
    summary: "Get Akis",
  })
  @get()
  static getAkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aki",
  })
  @post("{id}")
  static createAki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
