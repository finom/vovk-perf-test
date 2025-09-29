import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipvs")
export default class IpvController {
  @operation({
    summary: "Get Ipvs",
  })
  @get()
  static getIpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipv",
  })
  @post("{id}")
  static createIpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
