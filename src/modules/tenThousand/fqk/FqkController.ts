import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqks")
export default class FqkController {
  @operation({
    summary: "Get Fqks",
  })
  @get()
  static getFqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqk",
  })
  @post("{id}")
  static createFqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
