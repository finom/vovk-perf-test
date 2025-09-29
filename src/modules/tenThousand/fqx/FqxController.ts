import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqxes")
export default class FqxController {
  @operation({
    summary: "Get Fqxes",
  })
  @get()
  static getFqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqx",
  })
  @post("{id}")
  static createFqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
