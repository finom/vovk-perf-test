import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktxes")
export default class KtxController {
  @operation({
    summary: "Get Ktxes",
  })
  @get()
  static getKtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktx",
  })
  @post("{id}")
  static createKtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
