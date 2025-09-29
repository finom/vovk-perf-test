import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctas")
export default class CtaController {
  @operation({
    summary: "Get Ctas",
  })
  @get()
  static getCtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cta",
  })
  @post("{id}")
  static createCta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
