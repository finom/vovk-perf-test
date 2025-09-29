import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktms")
export default class KtmController {
  @operation({
    summary: "Get Ktms",
  })
  @get()
  static getKtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktm",
  })
  @post("{id}")
  static createKtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
