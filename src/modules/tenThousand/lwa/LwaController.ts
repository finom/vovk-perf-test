import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwas")
export default class LwaController {
  @operation({
    summary: "Get Lwas",
  })
  @get()
  static getLwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwa",
  })
  @post("{id}")
  static createLwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
