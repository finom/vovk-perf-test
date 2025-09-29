import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipks")
export default class IpkController {
  @operation({
    summary: "Get Ipks",
  })
  @get()
  static getIpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipk",
  })
  @post("{id}")
  static createIpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
