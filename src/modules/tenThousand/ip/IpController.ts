import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ips")
export default class IpController {
  @operation({
    summary: "Get Ips",
  })
  @get()
  static getIps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ip",
  })
  @post("{id}")
  static createIp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
