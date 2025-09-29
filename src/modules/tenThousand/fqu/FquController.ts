import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqus")
export default class FquController {
  @operation({
    summary: "Get Fqus",
  })
  @get()
  static getFqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqu",
  })
  @post("{id}")
  static createFqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
