import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzas")
export default class FzaController {
  @operation({
    summary: "Get Fzas",
  })
  @get()
  static getFzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fza",
  })
  @post("{id}")
  static createFza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
