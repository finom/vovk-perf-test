import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cles")
export default class CleController {
  @operation({
    summary: "Get Cles",
  })
  @get()
  static getCles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cle",
  })
  @post("{id}")
  static createCle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
