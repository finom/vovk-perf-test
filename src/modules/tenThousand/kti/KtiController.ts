import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktis")
export default class KtiController {
  @operation({
    summary: "Get Ktis",
  })
  @get()
  static getKtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kti",
  })
  @post("{id}")
  static createKti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
