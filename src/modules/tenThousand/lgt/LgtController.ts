import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgts")
export default class LgtController {
  @operation({
    summary: "Get Lgts",
  })
  @get()
  static getLgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgt",
  })
  @post("{id}")
  static createLgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
