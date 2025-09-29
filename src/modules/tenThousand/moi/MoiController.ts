import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mois")
export default class MoiController {
  @operation({
    summary: "Get Mois",
  })
  @get()
  static getMois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Moi",
  })
  @post("{id}")
  static createMoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
