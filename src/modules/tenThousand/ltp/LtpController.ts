import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltps")
export default class LtpController {
  @operation({
    summary: "Get Ltps",
  })
  @get()
  static getLtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltp",
  })
  @post("{id}")
  static createLtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
