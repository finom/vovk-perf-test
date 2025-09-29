import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgjs")
export default class LgjController {
  @operation({
    summary: "Get Lgjs",
  })
  @get()
  static getLgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgj",
  })
  @post("{id}")
  static createLgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
