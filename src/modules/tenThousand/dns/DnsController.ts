import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dns")
export default class DnsController {
  @operation({
    summary: "Get Dns",
  })
  @get()
  static getDns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dns",
  })
  @post("{id}")
  static createDns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
