import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glns")
export default class GlnController {
  @operation({
    summary: "Get Glns",
  })
  @get()
  static getGlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gln",
  })
  @post("{id}")
  static createGln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
