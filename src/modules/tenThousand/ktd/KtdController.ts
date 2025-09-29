import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktds")
export default class KtdController {
  @operation({
    summary: "Get Ktds",
  })
  @get()
  static getKtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktd",
  })
  @post("{id}")
  static createKtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
