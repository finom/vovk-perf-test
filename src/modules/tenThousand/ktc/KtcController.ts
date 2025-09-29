import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktcs")
export default class KtcController {
  @operation({
    summary: "Get Ktcs",
  })
  @get()
  static getKtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktc",
  })
  @post("{id}")
  static createKtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
