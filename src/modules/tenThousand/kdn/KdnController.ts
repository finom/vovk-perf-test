import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdns")
export default class KdnController {
  @operation({
    summary: "Get Kdns",
  })
  @get()
  static getKdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdn",
  })
  @post("{id}")
  static createKdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
