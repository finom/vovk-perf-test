import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqus")
export default class LquController {
  @operation({
    summary: "Get Lqus",
  })
  @get()
  static getLqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqu",
  })
  @post("{id}")
  static createLqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
