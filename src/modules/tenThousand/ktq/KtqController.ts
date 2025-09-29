import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktqs")
export default class KtqController {
  @operation({
    summary: "Get Ktqs",
  })
  @get()
  static getKtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktq",
  })
  @post("{id}")
  static createKtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
