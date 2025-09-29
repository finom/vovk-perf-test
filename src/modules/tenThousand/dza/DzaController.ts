import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzas")
export default class DzaController {
  @operation({
    summary: "Get Dzas",
  })
  @get()
  static getDzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dza",
  })
  @post("{id}")
  static createDza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
