import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpns")
export default class MpnController {
  @operation({
    summary: "Get Mpns",
  })
  @get()
  static getMpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpn",
  })
  @post("{id}")
  static createMpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
