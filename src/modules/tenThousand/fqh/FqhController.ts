import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqhs")
export default class FqhController {
  @operation({
    summary: "Get Fqhs",
  })
  @get()
  static getFqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqh",
  })
  @post("{id}")
  static createFqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
