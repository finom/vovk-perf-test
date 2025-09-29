import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktbs")
export default class KtbController {
  @operation({
    summary: "Get Ktbs",
  })
  @get()
  static getKtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktb",
  })
  @post("{id}")
  static createKtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
