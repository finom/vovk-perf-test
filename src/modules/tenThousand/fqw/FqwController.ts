import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqws")
export default class FqwController {
  @operation({
    summary: "Get Fqws",
  })
  @get()
  static getFqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqw",
  })
  @post("{id}")
  static createFqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
