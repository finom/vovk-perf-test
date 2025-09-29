import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("maos")
export default class MaoController {
  @operation({
    summary: "Get Maos",
  })
  @get()
  static getMaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mao",
  })
  @post("{id}")
  static createMao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
