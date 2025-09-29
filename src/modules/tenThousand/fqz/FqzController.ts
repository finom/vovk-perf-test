import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqzs")
export default class FqzController {
  @operation({
    summary: "Get Fqzs",
  })
  @get()
  static getFqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqz",
  })
  @post("{id}")
  static createFqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
