import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzas")
export default class BzaController {
  @operation({
    summary: "Get Bzas",
  })
  @get()
  static getBzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bza",
  })
  @post("{id}")
  static createBza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
