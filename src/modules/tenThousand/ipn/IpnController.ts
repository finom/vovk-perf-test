import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipns")
export default class IpnController {
  @operation({
    summary: "Get Ipns",
  })
  @get()
  static getIpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipn",
  })
  @post("{id}")
  static createIpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
