import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipzs")
export default class IpzController {
  @operation({
    summary: "Get Ipzs",
  })
  @get()
  static getIpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipz",
  })
  @post("{id}")
  static createIpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
