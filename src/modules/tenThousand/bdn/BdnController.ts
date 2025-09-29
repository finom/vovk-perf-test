import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdns")
export default class BdnController {
  @operation({
    summary: "Get Bdns",
  })
  @get()
  static getBdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdn",
  })
  @post("{id}")
  static createBdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
