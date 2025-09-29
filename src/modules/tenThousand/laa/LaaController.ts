import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("laas")
export default class LaaController {
  @operation({
    summary: "Get Laas",
  })
  @get()
  static getLaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Laa",
  })
  @post("{id}")
  static createLaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
