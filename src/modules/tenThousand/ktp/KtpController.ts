import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktps")
export default class KtpController {
  @operation({
    summary: "Get Ktps",
  })
  @get()
  static getKtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktp",
  })
  @post("{id}")
  static createKtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
