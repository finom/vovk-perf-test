import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipws")
export default class IpwController {
  @operation({
    summary: "Get Ipws",
  })
  @get()
  static getIpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipw",
  })
  @post("{id}")
  static createIpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
