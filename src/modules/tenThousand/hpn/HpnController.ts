import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpns")
export default class HpnController {
  @operation({
    summary: "Get Hpns",
  })
  @get()
  static getHpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpn",
  })
  @post("{id}")
  static createHpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
