import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndns")
export default class NdnController {
  @operation({
    summary: "Get Ndns",
  })
  @get()
  static getNdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndn",
  })
  @post("{id}")
  static createNdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
