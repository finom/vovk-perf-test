import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkis")
export default class FkiController {
  @operation({
    summary: "Get Fkis",
  })
  @get()
  static getFkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fki",
  })
  @post("{id}")
  static createFki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
