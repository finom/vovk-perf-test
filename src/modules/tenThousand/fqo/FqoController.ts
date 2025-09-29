import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqos")
export default class FqoController {
  @operation({
    summary: "Get Fqos",
  })
  @get()
  static getFqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqo",
  })
  @post("{id}")
  static createFqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
