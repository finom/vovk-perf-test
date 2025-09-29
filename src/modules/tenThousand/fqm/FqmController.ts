import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqms")
export default class FqmController {
  @operation({
    summary: "Get Fqms",
  })
  @get()
  static getFqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqm",
  })
  @post("{id}")
  static createFqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
