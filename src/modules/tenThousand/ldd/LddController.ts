import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldds")
export default class LddController {
  @operation({
    summary: "Get Ldds",
  })
  @get()
  static getLdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldd",
  })
  @post("{id}")
  static createLdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
