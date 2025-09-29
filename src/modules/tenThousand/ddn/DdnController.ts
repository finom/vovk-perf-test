import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddns")
export default class DdnController {
  @operation({
    summary: "Get Ddns",
  })
  @get()
  static getDdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddn",
  })
  @post("{id}")
  static createDdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
