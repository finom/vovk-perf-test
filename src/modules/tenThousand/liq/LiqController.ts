import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("liqs")
export default class LiqController {
  @operation({
    summary: "Get Liqs",
  })
  @get()
  static getLiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Liq",
  })
  @post("{id}")
  static createLiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
