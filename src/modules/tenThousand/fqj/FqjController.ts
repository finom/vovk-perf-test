import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqjs")
export default class FqjController {
  @operation({
    summary: "Get Fqjs",
  })
  @get()
  static getFqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqj",
  })
  @post("{id}")
  static createFqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
