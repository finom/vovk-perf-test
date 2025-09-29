import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqbs")
export default class FqbController {
  @operation({
    summary: "Get Fqbs",
  })
  @get()
  static getFqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqb",
  })
  @post("{id}")
  static createFqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
