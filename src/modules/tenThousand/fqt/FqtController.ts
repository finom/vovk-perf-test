import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqts")
export default class FqtController {
  @operation({
    summary: "Get Fqts",
  })
  @get()
  static getFqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqt",
  })
  @post("{id}")
  static createFqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
