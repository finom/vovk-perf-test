import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqrs")
export default class FqrController {
  @operation({
    summary: "Get Fqrs",
  })
  @get()
  static getFqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqr",
  })
  @post("{id}")
  static createFqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
