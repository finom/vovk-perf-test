import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcas")
export default class LcaController {
  @operation({
    summary: "Get Lcas",
  })
  @get()
  static getLcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lca",
  })
  @post("{id}")
  static createLca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
