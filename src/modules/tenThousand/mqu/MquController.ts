import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqus")
export default class MquController {
  @operation({
    summary: "Get Mqus",
  })
  @get()
  static getMqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqu",
  })
  @post("{id}")
  static createMqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
