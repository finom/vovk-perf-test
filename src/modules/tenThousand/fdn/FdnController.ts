import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdns")
export default class FdnController {
  @operation({
    summary: "Get Fdns",
  })
  @get()
  static getFdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdn",
  })
  @post("{id}")
  static createFdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
