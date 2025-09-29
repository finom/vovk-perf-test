import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lres")
export default class LreController {
  @operation({
    summary: "Get Lres",
  })
  @get()
  static getLres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lre",
  })
  @post("{id}")
  static createLre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
