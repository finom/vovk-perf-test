import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckis")
export default class CkiController {
  @operation({
    summary: "Get Ckis",
  })
  @get()
  static getCkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cki",
  })
  @post("{id}")
  static createCki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
