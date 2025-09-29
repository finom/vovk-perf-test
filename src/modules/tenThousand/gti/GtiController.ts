import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtis")
export default class GtiController {
  @operation({
    summary: "Get Gtis",
  })
  @get()
  static getGtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gti",
  })
  @post("{id}")
  static createGti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
