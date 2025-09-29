import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdns")
export default class CdnController {
  @operation({
    summary: "Get Cdns",
  })
  @get()
  static getCdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdn",
  })
  @post("{id}")
  static createCdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
