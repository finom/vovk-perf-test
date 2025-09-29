import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkis")
export default class GkiController {
  @operation({
    summary: "Get Gkis",
  })
  @get()
  static getGkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gki",
  })
  @post("{id}")
  static createGki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
