import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btps")
export default class BtpController {
  @operation({
    summary: "Get Btps",
  })
  @get()
  static getBtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btp",
  })
  @post("{id}")
  static createBtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
