import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edns")
export default class EdnController {
  @operation({
    summary: "Get Edns",
  })
  @get()
  static getEdns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edn",
  })
  @post("{id}")
  static createEdn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
