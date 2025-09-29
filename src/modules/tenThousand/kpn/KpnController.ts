import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpns")
export default class KpnController {
  @operation({
    summary: "Get Kpns",
  })
  @get()
  static getKpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpn",
  })
  @post("{id}")
  static createKpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
