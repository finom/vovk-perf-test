import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktws")
export default class KtwController {
  @operation({
    summary: "Get Ktws",
  })
  @get()
  static getKtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktw",
  })
  @post("{id}")
  static createKtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
