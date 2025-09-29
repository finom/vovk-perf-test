import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgks")
export default class LgkController {
  @operation({
    summary: "Get Lgks",
  })
  @get()
  static getLgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgk",
  })
  @post("{id}")
  static createLgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
