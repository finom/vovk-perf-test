import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktjs")
export default class KtjController {
  @operation({
    summary: "Get Ktjs",
  })
  @get()
  static getKtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktj",
  })
  @post("{id}")
  static createKtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
