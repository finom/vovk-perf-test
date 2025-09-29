import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alts")
export default class AltController {
  @operation({
    summary: "Get Alts",
  })
  @get()
  static getAlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alt",
  })
  @post("{id}")
  static createAlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
