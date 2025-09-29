import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktfs")
export default class KtfController {
  @operation({
    summary: "Get Ktfs",
  })
  @get()
  static getKtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktf",
  })
  @post("{id}")
  static createKtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
