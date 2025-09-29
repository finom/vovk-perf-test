import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktgs")
export default class KtgController {
  @operation({
    summary: "Get Ktgs",
  })
  @get()
  static getKtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktg",
  })
  @post("{id}")
  static createKtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
