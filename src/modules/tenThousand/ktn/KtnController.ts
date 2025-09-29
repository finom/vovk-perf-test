import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktns")
export default class KtnController {
  @operation({
    summary: "Get Ktns",
  })
  @get()
  static getKtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktn",
  })
  @post("{id}")
  static createKtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
