import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqgs")
export default class FqgController {
  @operation({
    summary: "Get Fqgs",
  })
  @get()
  static getFqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqg",
  })
  @post("{id}")
  static createFqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
