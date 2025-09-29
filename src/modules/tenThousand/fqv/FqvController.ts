import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqvs")
export default class FqvController {
  @operation({
    summary: "Get Fqvs",
  })
  @get()
  static getFqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqv",
  })
  @post("{id}")
  static createFqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
