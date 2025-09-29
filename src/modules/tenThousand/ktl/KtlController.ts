import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktls")
export default class KtlController {
  @operation({
    summary: "Get Ktls",
  })
  @get()
  static getKtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktl",
  })
  @post("{id}")
  static createKtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
