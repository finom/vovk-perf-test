import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipxes")
export default class IpxController {
  @operation({
    summary: "Get Ipxes",
  })
  @get()
  static getIpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipx",
  })
  @post("{id}")
  static createIpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
